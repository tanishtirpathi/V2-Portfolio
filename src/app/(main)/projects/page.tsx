import DiagonalPattern from "@/features/components/LRBorder/lrborder";
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
    </div>
  );
}