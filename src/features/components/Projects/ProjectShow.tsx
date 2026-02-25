import { ProjectCard } from "./projectCard";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
export default function ProjectShow() {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-sans text-black/90 dark:text-gray-300 font-bold">Projects</h2>
      <h4 className="text-xs text-gray-700 dark:text-gray-400 font-mono mb-6">Here are some of my recent projects</h4>

      <ProjectCard limit={4} />

      <div className="mt-6 text-center">
        <RainbowButton variant="outline">
          <Link href="./projects" target="_blank" rel="noopener noreferrer"
            className=" font-main font-semibold flex items-center gap-2"
          >View All Projects
          </Link></RainbowButton>
      </div>
    </div>
  );
}