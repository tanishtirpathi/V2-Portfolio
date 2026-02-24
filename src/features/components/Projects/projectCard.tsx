import Image from "next/image";
import { ProjectDetail } from "./project";
import { LuGithub } from "react-icons/lu";
import { IoEarthOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
interface ProjectCardProps {
  limit?: number;
}

export const ProjectCard = ({ limit }: ProjectCardProps) => {
  const projectsToShow = limit
    ? ProjectDetail.slice(0, limit)
    : ProjectDetail;

  return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
  {projectsToShow.map((project, index) => (
    <div
      key={index}
      className="group relative bg-[#18181b] backdrop-blur-lg border border-white/10 
      rounded-2xl overflow-hidden transition-all duration-500 
      hover:-translate-y-1 hover:border-white/20"
    >
      {/* Image */}
      <div className="relative w-full h-37 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-[240px]">
        {/* Top Content */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-3xl font-light font-serif tracking-tight text-white">
              {project.title}
            </h2>

            <div className="flex gap-3 text-lg text-gray-400">
              <a
                href={project.GithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <LuGithub />
              </a>
              <a
                href={project.LiveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <IoEarthOutline />
              </a>
            </div>
          </div>

          <p className="text-sm font-main font-semibold text-gray-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-2 pt-1 flex items-center justify-between">
          
          {/* Status Badge */}
          <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 
          text-green-400 border border-green-500/20 flex items-center gap-2">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            {project.status}
          </span>

          {/* View Details */}
          <button className="flex items-center gap-2 text-sm text-gray-400 
          hover:text-white transition-all duration-300 group/view">

           <a href={project.location} target="_blank" rel="noopener noreferrer">
            View Details
           </a>
            <HiArrowUpRight className="transition-transform duration-300 group-hover/view:translate-x-1 group-hover/view:-translate-y-1" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
  );
};