
"use client"
import Link from "next/link";
import DiagonalPattern from "@/features/components/LRBorder/Lrborder";
import { ProjectCard } from "@/features/components/Projects/projectCard";
export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 relative ">
      <DiagonalPattern side="left" />
      <DiagonalPattern side="right" />
      <div className="items-center flex flex-col justify-center gap-1"><h2 className="text-4xl font-light font-serif italic ">Project Section</h2>
        <p className="text-neutral-400 mb-10">
          some projects are meant to flex      </p>
      </div>
      <ProjectCard />

      <div className="mt-10 justify-center flex">
        <Link
          href="/"
          className="text-sm font-bold px-4 py-2 rounded-md bg-black/90 text-white dark:bg-white/40 dark:text-black font-sans ">

            Go to Home
           </Link>
      </div>
    </div>
  );
}