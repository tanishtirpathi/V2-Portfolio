import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../../mdx.css";
import DiagonalPattern from "@/features/components/LRBorder/Lrborder";
export default async function ProjectPage(props: { params: { slug: string } }) {
  const params = await props.params;
  const slug = params?.slug;

  if (!slug) {
    throw new Error("Slug is missing");
  }

  const filePath = path.join(
    process.cwd(),
    "src/content/projects",
    `${slug}.mdx`
  );
  console.log("Slug:", slug);
  console.log("File path:", filePath);
  const source = fs.readFileSync(filePath, "utf8");

  return (<div className="mdx-wrapper max-w-2xl mx-auto p-4 relative">
         <DiagonalPattern side="left" />
          <DiagonalPattern side="right" />
    <MDXRemote source={source} />
  </div>);
}