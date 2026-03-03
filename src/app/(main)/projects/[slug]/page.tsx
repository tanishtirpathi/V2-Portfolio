import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ProjectPage({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content/projects",
    `${params.slug}.mdx`
  );

  const source = fs.readFileSync(filePath, "utf8");

  return <MDXRemote source={source} />;
}