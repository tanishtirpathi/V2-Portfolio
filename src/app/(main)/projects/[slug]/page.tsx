import fs from "fs";
import path from "path";
import { LuGithub } from "react-icons/lu";
import { IoEarthOutline } from "react-icons/io5";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../../mdx.css";
import Image from "next/image";
import { ProjectDetail } from "@/features/components/Projects/project";
import DiagonalPattern from "@/features/components/LRBorder/Lrborder";
import Link from "next/link"

export default async function ProjectPage(props: { params: { slug: string } }) {
  const params = await props.params;
  const slug = params?.slug;

  const currentProject = ProjectDetail.find(
    (item) => item.location === `/projects/${slug}`
  );


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
  return (
    <div className="mdx-wrapper max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <DiagonalPattern side="left" />
      <DiagonalPattern side="right" />

      <div className="relative z-10 mt-10 space-y-6">
        <span className="
                  inline-flex items-center
                  text-sm font-main
                  px-3 py-1.5
                  rounded-lg
                  border border-black/20 dark:border-white/20
                  bg-white/40 dark:bg-white/5
                  backdrop-blur-md
                  text-black/70 dark:text-white/70
                  shadow-sm
                  transition-all duration-200
                  hover:bg-white/60 dark:hover:bg-white/10
                  hover:shadow-md
                                        ">
          <Link href="/projects" className="hover:underline underline-offset-4">
            Back to project
          </Link>
        </span>
        {/* Project Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            className="shadow-xl border border-black/20 rounded-xl w-full object-fit"
            src={`/images/Project/${slug}.webp`}
            alt={slug}
            width={800}
            height={300}
            priority
          />
        </div>

        {/* Project Status */}
        {currentProject && (
          <div className="flex flex-wrap gap-3">
            <span
              className={`text-sm px-3 py-1 rounded-md shadow-xl font-main font-bold border flex items-center gap-2
        ${currentProject.status === "Completed"
                  ? "bg-transparent text-green-600  border-black/20 dark:border-white/20 dark:text-green-400"
                  : "bg-transparent text-red-600 border-black/20 dark:border-white/20 dark:text-red-400"
                }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${currentProject.status === "Completed"
                  ? "bg-green-600"
                  : "bg-red-600"
                  }`}
              />
              {currentProject.status}
            </span>
            <span
              className="text-sm px-3 py-1 text-black/80 dark:text-white/70  rounded-md shadow-xl font-main font-bold border 
              dark:border-white/20 dark:bg-white/5 flex items-center gap-2 bg-black/10 border-black/20"
            >
              <Link href={currentProject.LiveLink} className="hover:text-black dark:hover:text-white">
                <IoEarthOutline className="mr-2 inline-block" />
                Live
              </Link>
            </span>
            <span
              className="text-sm px-3 py-1 text-black/80 dark:text-white/70  rounded-md shadow-xl font-main font-bold border 
              dark:border-white/20 dark:bg-white/5 flex items-center gap-2 bg-black/10 border-black/20"
            >
              <Link href={currentProject.GithubLink} className="hover:text-black dark:hover:text-white">
                <LuGithub className="mr-2 inline-block" />
                Github
              </Link>
            </span>
          </div>
        )}

        {/* MDX Content */}
        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote source={source} />
        </div>
        <span className="
                  inline-flex items-center justify-center
                  text-sm font-main
                  px-3 py-1.5
                  rounded-lg
                  border border-black/20 dark:border-white/20
                  bg-white/40 dark:bg-white/5
                  backdrop-blur-md
                  text-black/70 dark:text-white/70
                  shadow-sm
                  transition-all duration-200
                  hover:bg-white/60 dark:hover:bg-white/10
                  hover:shadow-md
                                        ">
          <Link href="/projects" className="hover:underline underline-offset-4">
            Back to project
          </Link>
        </span>
      </div>
    </div>
  );

}
