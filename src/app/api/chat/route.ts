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

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    console.log("USER QUESTION:", message);

    
        const embedder = await pipeline(
          "feature-extraction",
          "Xenova/all-MiniLM-L6-v2"
        );
    
        const output = await embedder(message, {
          pooling: "mean",
          normalize: true,
        });
    
        const vector = Array.from(output.data);
    
    const searchResult = await qdrant.search("portfolio", {
      vector,
      limit: 5,
      with_payload: true,
    });

    // 3. Extract context
    const context = searchResult
      .map((item: any) => item.payload.text)
      .join("\n");

    console.log("CONTEXT FROM DATABASE:\n", context);

    const prompt = `
You are Tanish's AI Portfolio Assistant.

Answer only using the context below.

If the answer is not in the context, say you don't know.

---

CONTEXT:
${context}

---

QUESTION:
${message}
`;

    console.log("FINAL PROMPT SENT TO GEMINI:\n", prompt);

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const answer = response.text;

    return NextResponse.json({ answer });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: "Something broke" },
      { status: 500 }
    );
  }
}