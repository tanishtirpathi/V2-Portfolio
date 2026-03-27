
"use client"
import Link from "next/link";
import { useMemo, useState } from "react";
import DiagonalPattern from "@/features/components/LRBorder/Lrborder";
import { ProjectCard } from "@/features/components/Projects/projectCard";
import { ProjectDetail } from "@/features/components/Projects/project";

export default function Home() {
  const [activeType, setActiveType] = useState("all");

  const typeOptions = useMemo(() => {
    const seen = new Set<string>();

    return ProjectDetail.flatMap((project) => project.type)
      .map((type) => type.trim())
      .filter(Boolean)
      .reduce<{ key: string; label: string }[]>((acc, type) => {
        const key = type.toLowerCase();
        if (seen.has(key)) return acc;

        seen.add(key);
        acc.push({
          key,
          label: type.charAt(0).toUpperCase() + type.slice(1),
        });

        return acc;
      }, []);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 relative ">
      <DiagonalPattern side="left" />
      <DiagonalPattern side="right" />
      <div className="items-center flex flex-col justify-center gap-1"><h2 className="text-4xl font-light font-serif italic ">Project Section</h2>
        <p className="text-neutral-400 mb-10">
          some projects are meant to flex      </p>
      </div>

      <div className="mb-8 px-5 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveType("all")}
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
            activeType === "all"
              ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black"
              : "border-neutral-300 text-neutral-700 hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-300"
          }`}
        >
          All
        </button>

        {typeOptions.map((type) => (
          <button
            key={type.key}
            type="button"
            onClick={() => setActiveType(type.key)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
              activeType === type.key
                ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black"
                : "border-neutral-300 text-neutral-700 hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-300"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>
      
      <ProjectCard typeFilter={activeType} />

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