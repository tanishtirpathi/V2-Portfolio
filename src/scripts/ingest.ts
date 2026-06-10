import fs from "fs";
import path from "path";

const dataFolder = path.join(process.cwd(), "src/data/AI");

const items = fs.readdirSync(dataFolder);

for (const item of items) {
  const fullPath = path.join(dataFolder, item);

  const stat = fs.statSync(fullPath);

  if (stat.isFile()) {
    const content = fs.readFileSync(fullPath, "utf8");

    console.log("File:", item);
    console.log(content);
  }
}