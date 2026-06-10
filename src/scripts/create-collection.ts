import { QdrantClient } from "@qdrant/js-client-rest";
import dotenv from "dotenv";

dotenv.config();

const client = new QdrantClient({
  url: process.env.QDRABT_API_URL!,
  apiKey: process.env.QDRABT_API_KEY!,
  checkCompatibility: false,
});

async function create() {
  await client.createCollection("portfolio", {
    vectors: {
      size: 384,
      distance: "Cosine",
    },
  });

  console.log("Collection created 🚀");
}

create();