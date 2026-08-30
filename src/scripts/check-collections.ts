import { QdrantClient } from "@qdrant/js-client-rest";
import dotenv from "dotenv";

dotenv.config();

const client = new QdrantClient({
  url: process.env.QDRANT_API_URL!,
  apiKey: process.env.QDRANT_API_KEY!,
  checkCompatibility: false,
});

async function run() {
  const res = await client.getCollections();
  console.log(JSON.stringify(res, null, 2));
}

run();