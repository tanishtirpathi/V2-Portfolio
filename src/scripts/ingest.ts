import fs from "fs";
import path from "path";
import dotenv from "dotenv";

import { QdrantClient } from "@qdrant/js-client-rest";
import { pipeline } from "@xenova/transformers";

dotenv.config();

// ======================================================
// QDRANT
// ======================================================

const client = new QdrantClient({
  url: process.env.QDRANT_API_URL!,
  apiKey: process.env.QDRANT_API_KEY!,
  checkCompatibility: false,
});

// ======================================================
// CONFIG
// ======================================================

const COLLECTION_NAME = "portfolio";

const EMBEDDING_MODEL =
  "Xenova/all-MiniLM-L6-v2";

const dataFolder = path.join(
  process.cwd(),
  "src/data/AI"
);

// Number of characters per chunk
const CHUNK_SIZE = 1000;

// Overlap between chunks
const CHUNK_OVERLAP = 200;

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
// CHUNKING
// ======================================================

function createChunks(
  text: string,
  chunkSize = CHUNK_SIZE,
  overlap = CHUNK_OVERLAP
) {
  const chunks: string[] = [];

  let start = 0;

  while (start < text.length) {
    const end = start + chunkSize;

    const chunk = text
      .slice(start, end)
      .trim();

    if (chunk.length > 0) {
      chunks.push(chunk);
    }

    start += chunkSize - overlap;
  }

  return chunks;
}

// ======================================================
// MAIN INGESTION
// ======================================================

async function run() {
  console.log("🚀 Starting ingestion...\n");

  // --------------------------------------------------
  // Check collection
  // --------------------------------------------------

  const collections =
    await client.getCollections();

  const collectionExists =
    collections.collections.some(
      (collection) =>
        collection.name === COLLECTION_NAME
    );

  if (!collectionExists) {
    throw new Error(
      `Collection "${COLLECTION_NAME}" does not exist. Run create-collection first.`
    );
  }

  console.log(
    `✅ Collection "${COLLECTION_NAME}" exists`
  );

  // --------------------------------------------------
  // Load embedding model
  // --------------------------------------------------

  const embedder =
    await getEmbeddingPipeline();

  // --------------------------------------------------
  // Read files
  // --------------------------------------------------

  const files = fs
    .readdirSync(dataFolder)
    .filter((file) => {
      const filePath = path.join(
        dataFolder,
        file
      );

      return fs.statSync(filePath).isFile();
    });

  console.log(
    `📁 Found ${files.length} files\n`
  );

  // --------------------------------------------------
  // Process each file
  // --------------------------------------------------

  for (const file of files) {
    const filePath = path.join(
      dataFolder,
      file
    );

    const text = fs.readFileSync(
      filePath,
      "utf8"
    ).trim();

    if (!text) {
      console.log(
        `⚠️ Skipping empty file: ${file}`
      );
      continue;
    }

    console.log(
      `\n📄 Processing: ${file}`
    );

    // ------------------------------------------------
    // Create chunks
    // ------------------------------------------------

    const chunks = createChunks(text);

    console.log(
      `✂️ Created ${chunks.length} chunks`
    );

    // ------------------------------------------------
    // Create Qdrant points
    // ------------------------------------------------

    const points = [];

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];

      console.log(
        `🧠 Embedding chunk ${i + 1}/${chunks.length}`
      );

      const output = await embedder(chunk, {
        pooling: "mean",
        normalize: true,
      });

      const vector =
        Array.from(output.data) as number[];

      if (vector.length !== 384) {
        throw new Error(
          `Unexpected vector size: ${vector.length}`
        );
      }

      points.push({
        id: crypto.randomUUID(),

        vector,

        payload: {
          text: chunk,

          source: file,

          chunkIndex: i,

          totalChunks: chunks.length,
        },
      });
    }

    // ------------------------------------------------
    // Upload chunks to Qdrant
    // ------------------------------------------------

    console.log(
      `⬆️ Uploading ${points.length} chunks...`
    );

    await client.upsert(COLLECTION_NAME, {
      wait: true,

      points,
    });

    console.log(
      `✅ Uploaded ${file}`
    );
  }

  console.log("\n================================");
  console.log("🎉 INGESTION COMPLETE");
  console.log("================================");
}

run().catch((error) => {
  console.error(
    "\n❌ INGESTION ERROR:"
  );

  console.error(error);

  process.exit(1);
});