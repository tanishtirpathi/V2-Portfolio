import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { QdrantClient } from "@qdrant/js-client-rest";
import { pipeline } from "@xenova/transformers";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const client = new QdrantClient({
  url: process.env.QDRABT_API_URL!,
  apiKey: process.env.QDRABT_API_KEY!,
  checkCompatibility: false,

});

const dataFolder = path.join(process.cwd(), "src/data/AI");

async function run() {
  const files = fs.readdirSync(dataFolder);

  for (const file of files) {
    const filePath = path.join(dataFolder, file);

    const text = fs.readFileSync(filePath, "utf8");

    console.log("Processing:", file);

    // create embedding


    const embedder = await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    );

    const output = await embedder(text, {
      pooling: "mean",
      normalize: true,
    });

    const vector = Array.from(output.data);


    // store in qdrant
    await client.upsert("portfolio", {
      points: [
        {
          id: crypto.randomUUID(),
          vector: vector || [],
          payload: {
            text: text,
            source: file,
          },
        },
      ],
    });

    console.log("Uploaded:", file);
  }

  console.log("DONE 🚀");
}

run();