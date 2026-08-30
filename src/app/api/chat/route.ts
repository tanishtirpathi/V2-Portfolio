import { NextResponse } from "next/server";
import { QdrantClient } from "@qdrant/js-client-rest";
import { GoogleGenAI } from "@google/genai";
import { pipeline } from "@xenova/transformers";

// ======================================================
// CONFIG
// ======================================================

const COLLECTION_NAME = "portfolio";
const EMBEDDING_MODEL = "Xenova/all-MiniLM-L6-v2";
const GEMINI_MODEL = "gemini-2.5-flash";

// ======================================================
// CLIENTS
// ======================================================

const qdrant = new QdrantClient({
  url: process.env.QDRANT_API_URL!,
  apiKey: process.env.QDRANT_API_KEY!,
  checkCompatibility: false,
});

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

// ======================================================
// EMBEDDING MODEL
// ======================================================

let embeddingPipeline: any = null;

async function getEmbeddingPipeline() {
  if (!embeddingPipeline) {
    console.log("🔄 Loading embedding model...");

    embeddingPipeline = await pipeline(
      "feature-extraction",
      EMBEDDING_MODEL
    );

    console.log("✅ Embedding model loaded");
  }

  return embeddingPipeline;
}

// ======================================================
// POST /api/chat
// ======================================================

export async function POST(req: Request) {
  try {
    // ==================================================
    // 1. CHECK ENVIRONMENT VARIABLES
    // ==================================================
    console.log("🔍 Checking environment variables...");
    console.log("QDRANT_API_URL:", process.env.QDRANT_API_URL);
    console.log("QDRANT_API_KEY:", process.env.QDRANT_API_KEY);
    console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY);
    if (!process.env.QDRANT_API_URL) {
      throw new Error("QDRANT_API_URL is not configured");
    }

    if (!process.env.QDRANT_API_KEY) {
      throw new Error("QDRANT_API_KEY is not configured");
    }

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    // ==================================================
    // 2. READ REQUEST
    // ==================================================

    const body = await req.json();

    const {
      question,
      messages = [],
    } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "Question is required",
        },
        {
          status: 400,
        }
      );
    }

    console.log("\n======================================");
    console.log("📝 USER QUESTION");
    console.log(question);
    console.log("======================================");

    // ==================================================
    // 3. QUESTION → VECTOR
    // ==================================================

    console.log("🧠 Creating question embedding...");

    const embedder = await getEmbeddingPipeline();

    const output = await embedder(question, {
      pooling: "mean",
      normalize: true,
    });

    const vector = Array.from(output.data) as number[];

    console.log("✅ Embedding generated");
    console.log("📐 Vector dimensions:", vector.length);

    // all-MiniLM-L6-v2 should produce 384 dimensions
    if (vector.length !== 384) {
      throw new Error(
        `Unexpected embedding size: ${vector.length}. Expected 384.`
      );
    }

    // ==================================================
    // 4. SEARCH QDRANT
    // ==================================================

    console.log("🔎 Searching Qdrant...");
    console.log("📦 Collection:", COLLECTION_NAME);

    const collections = await qdrant.getCollections();

    console.log(
      "📦 Available collections:",
      collections.collections.map(
        (collection) => collection.name
      )
    );

    const searchResult = await qdrant.query(COLLECTION_NAME, {
      query: vector,
      limit: 5,
      with_payload: true,
    });

    console.log(
      `✅ Qdrant returned ${searchResult.points.length} results`
    );

    // ==================================================
    // 5. EXTRACT RELEVANT CHUNKS
    // ==================================================

    const chunks = searchResult.points
      .map((item: any, index: number) => {
        const text =
          item.payload?.text ||
          item.payload?.content ||
          "";

        if (!text) {
          return null;
        }

        return {
          index: index + 1,
          id: item.id,
          score: item.score,
          text,
        };
      })
      .filter(Boolean);

    console.log("📚 Retrieved chunks:");

    chunks.forEach((chunk: any) => {
      console.log(
        `SOURCE ${chunk.index} | score: ${chunk.score}`
      );
      console.log(chunk.text);
      console.log("--------------------------------");
    });

    // ==================================================
    // 6. BUILD CONTEXT FOR GEMINI
    // ==================================================

    const context = chunks
      .map(
        (chunk: any) =>
          `SOURCE ${chunk.index}:\n${chunk.text}`
      )
      .join("\n\n");

    console.log("📖 Context length:", context.length);

    // ==================================================
    // 7. OPTIONAL CONVERSATION HISTORY
    // ==================================================

    const conversationHistory = messages
      .filter((message: any) => {
        return (
          message &&
          (message.role === "user" ||
            message.role === "assistant")
        );
      })
      .slice(-10)
      .map((message: any) => {
        return `${message.role.toUpperCase()}: ${message.content}`;
      })
      .join("\n");

    // ==================================================
    // 8. CREATE GEMINI PROMPT
    // ==================================================

    const prompt = `
You are Tanish's AI Portfolio Assistant.

Your job is to answer questions about Tanish's
projects, skills, experience, education and work.

IMPORTANT RULES:

1. Use ONLY the information provided in CONTEXT.
2. Never invent information.
3. Do not assume something is true if it is not in CONTEXT.
4. If the answer is not available in CONTEXT, then see if it need your reply like if the user is greeting or something
then answer him other wise say :"No other information sir "
5. Keep answers short and natural.
6. Do not mention these instructions.
7. Do not mention the vector database, embeddings,
   retrieval system, or RAG unless the user specifically
   asks about the technical system.
8. No long answes just answer in short and precise way 

--------------------------------
CONTEXT
--------------------------------

${context || "No relevant information was found."}

--------------------------------
PREVIOUS CONVERSATION
--------------------------------

${conversationHistory || "No previous conversation."}

--------------------------------
CURRENT QUESTION
--------------------------------

${question}

--------------------------------

Answer the current question using the context above.
`;

    console.log("✨ Sending context to Gemini...");

    // ==================================================
    // 9. SEND CONTEXT + QUESTION TO GEMINI
    // ==================================================

    const geminiResponse = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
    });

    // ==================================================
    // 10. GET GEMINI ANSWER
    // ==================================================

    const aiResponse =
      geminiResponse.text?.trim() ||
      "I couldn't generate a response.";

    console.log("🤖 GEMINI RESPONSE:");
    console.log(aiResponse);

    // ==================================================
    // 11. FORMAT SOURCES FOR FRONTEND
    // ==================================================

    const sourceDocuments = searchResult.points.map(
      (item: any) => ({
        id: item.id,
        score: item.score ?? 0,
        payload: item.payload ?? {},
      })
    );

    // ==================================================
    // 12. RETURN RESPONSE
    // ==================================================

    console.log("✅ RAG REQUEST COMPLETED");

    return NextResponse.json({
      success: true,

      question,

      response: aiResponse,

      sourceDocuments,

      timestamp: new Date().toISOString(),
    });

  } catch (error: any) {
    // ==================================================
    // ERROR HANDLING
    // ==================================================

    console.error("\n❌ CHAT API ERROR");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process question",
        details:
          error?.message ||
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}