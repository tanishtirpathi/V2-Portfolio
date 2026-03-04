import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import "../../../mdx.css";
import DiagonalPattern from "@/features/components/LRBorder/Lrborder";
import Link from "next/link";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 

  const filePath = path.join(
    process.cwd(),
    "src/content/blog",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");

  return (
    <div className="mdx-wrapper max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <DiagonalPattern side="left" />
      <DiagonalPattern side="right" />

      <div className="relative z-10 mt-10 space-y-6">
        <Link
          href="/blogs"
          className="inline-flex items-center text-sm px-3 py-1.5 rounded-lg border border-black/20 dark:border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-md hover:underline"
        >
          Back to blogs
        </Link>

        <div className="prose dark:prose-invert max-w-none px-10">
          <MDXRemote source={source} />
        </div>
      </div>
    </div>
  );
}