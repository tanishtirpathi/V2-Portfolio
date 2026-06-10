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
    const { question, collectionName = "portfolio", messages = [] } = await req.json();

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

    const vector = Array.from(output.data) as number[];
    console.log("✅ Embedding generated");
 console.log(vector)
    // Step 2: Search Qdrant
    const searchResult = await qdrant.search(collectionName, {
      vector : vector,
      limit: 5,
      with_payload: true,
    });

    console.log(`🔍 Found ${searchResult.length} results from Qdrant`);
    console.log(searchResult);
    // Step 3: Extract context
    const context = searchResult
      .map((item: any) => item.payload?.text || item.payload?.content || "")
      .filter(Boolean)
      .join("\n\n");

    const systemPrompt = `You are Tanish's AI Portfolio Assistant. You are helpful, friendly, and knowledgeable about Tanish's work, skills, and projects.

Answer the user's question based on the context provided below. If the answer is not in the context, let the user know that you don't have that information.

---

CONTEXT:
${context || "No context available in the database."}

---

Please provide a helpful and concise answer. and make sure to answer in short as much as u can `;

    console.log("✨ Sending prompt to OpenRouter with reasoning...");

    if (!process.env.OPENROUTER_API_KEY) {
      throw new Error("OPENROUTER_API_KEY is not configured");
    }

    // Build messages array - preserve existing messages with reasoning details
    const conversationMessages: any[] = [
      ...messages.filter((msg: any) => msg.role !== "system"),
      {
        role: "user",
        content: question
      }
    ];

    const llmResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Portfolio AI"
      },
      body: JSON.stringify({
        model: "nex-agi/nex-n2-pro:free",
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          ...conversationMessages
        ],
        reasoning: {
          enabled: true,
          type: "enabled",
          budget_tokens: 10000
        }
      })
    });

    if (!llmResponse.ok) {
      const errorData = await llmResponse.json();
      throw new Error(`OpenRouter API error: ${errorData.error?.message || llmResponse.statusText}`);
    }

    const llmData = await llmResponse.json();

    if (!llmData.choices || !llmData.choices[0] || !llmData.choices[0].message) {
      throw new Error("Invalid response structure from OpenRouter");
    }

    const assistantMessage = llmData.choices[0].message;
    const aiResponse = assistantMessage.content || "No response generated";
    const reasoningDetails = assistantMessage.reasoning_details || null;

    // Format source documents for frontend
    const sourceDocuments = searchResult.map((item: any) => ({
      id: item.id,
      score: item.score || 0,
      payload: item.payload || {},
    }));

    console.log("✅ Response generated successfully with reasoning");
    console.log("🧠 Reasoning Details:", reasoningDetails);

    return NextResponse.json({
      success: true,
      question,
      response: aiResponse,
      reasoning: reasoningDetails,
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