import { NextResponse } from "next/server";
import { QdrantClient } from "@qdrant/js-client-rest";
import { GoogleGenAI } from "@google/genai";
import { pipeline } from "@xenova/transformers";

const qdrant = new QdrantClient({
   url: process.env.QDRABT_API_URL!,
  apiKey: process.env.QDRABT_API_KEY!,
  checkCompatibility: false,
});

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

let embeddingPipeline: any = null;

async function getEmbeddingPipeline() {
  if (!embeddingPipeline) {
    embeddingPipeline = await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    );
  }
  return embeddingPipeline;
}

export async function POST(req: Request) {
  try {
    const { question, collectionName = "portfolio" } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    console.log("📝 USER QUESTION:", question);

    // Step 1: Generate embedding
    const embedder = await getEmbeddingPipeline();
    const output = await embedder(question, {
      pooling: "mean",
      normalize: true,
    });

    const vector = Array.from(output.data);
    console.log("✅ Embedding generated");

    // Step 2: Search Qdrant
    const searchResult = await qdrant.search(collectionName, {
      vector,
      limit: 5,
      with_payload: true,
    });

    console.log(`🔍 Found ${searchResult.length} results from Qdrant`);

    // Step 3: Extract context
    const context = searchResult
      .map((item: any) => item.payload?.text || item.payload?.content || "")
      .filter(Boolean)
      .join("\n\n");

    const prompt = `
You are Tanish's AI Portfolio Assistant. You are helpful, friendly, and knowledgeable about Tanish's work, skills, and projects.

Answer the user's question based on the context provided below. If the answer is not in the context, let the user know that you don't have that information.

---

CONTEXT:
${context || "No context available in the database."}

---

QUESTION:
${question}

Please provide a helpful and concise answer.
`;

    console.log("✨ Sending prompt to Gemini...");

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
    });

    const aiResponse = response.text || "";

    // Format source documents for frontend
    const sourceDocuments = searchResult.map((item: any) => ({
      id: item.id,
      score: item.score || 0,
      payload: item.payload || {},
    }));

    console.log("✅ Response generated successfully");

    return NextResponse.json({
      success: true,
      question,
      response: aiResponse,
      sourceDocuments,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error("❌ Chat API Error:", err);
    return NextResponse.json(
      {
        error: "Failed to process question",
        details: err.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}