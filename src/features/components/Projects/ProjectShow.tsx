import { ProjectCard } from "./projectCard";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function ProjectShow() {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-sans text-gray-300 font-bold">Projects</h2>
      <h4 className="text-xs text-gray-400 font-mono mb-6">Here are some of my recent projects</h4>

      <ProjectCard limit={4} />

      <div className="mt-6 text-center">
        <RainbowButton variant="outline">
          <a href="https://docs.google.com/document/d/e/2PACX-1vSvmlZaSpYs7Z7JWNe2o1VddGUWKsqNUGaQmWqGMDRT-lMaMF5QwWDXeVDqat9EQFwf5Ec_BDmSXWTE/pub" target="_blank" rel="noopener noreferrer"
            className=" font-main font-semibold flex items-center gap-2"
          >View All Projects
          </a></RainbowButton>
      </div>
    </div>
  );
}