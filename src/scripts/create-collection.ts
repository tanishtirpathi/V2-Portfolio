import { QdrantClient } from "@qdrant/js-client-rest";
import dotenv from "dotenv";

dotenv.config();

const client = new QdrantClient({
  url: process.env.QDRANT_API_URL!,
  apiKey: process.env.QDRANT_API_KEY!,
  checkCompatibility: false,
});

async function create() {
  const collectionName = "portfolio";

  const collections = await client.getCollections();

  const exists = collections.collections.some(
    (collection) => collection.name === collectionName
  );

  if (exists) {
    console.log(`✅ Collection "${collectionName}" already exists`);
    return;
  }

  await client.createCollection(collectionName, {
    vectors: {
      size: 384,
      distance: "Cosine",
    },
  });

  console.log(`🚀 Collection "${collectionName}" created`);
}

create().catch((error) => {
  console.error("❌ Failed to create collection:", error);
  process.exit(1);
});