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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-1 lg:px-0  ">
      {projectsToShow.map((project, index) => (
        <div
          key={index}
          className="group relative bg-[#fdfbfb] dark:bg-[#18181b] 
      backdrop-blur-lg border border-gray-300/40 shadow-lg dark:border-white/10 
      rounded-2xl overflow-hidden transition-all duration-150  ease-in-out 
      hover:-translate-y-1 hover:border-white/20"
        >
          {/* Image */}
          <div className="relative w-full h-37 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={240}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 dark:bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col justify-between h-[240px]">
            {/* Top Content */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-3xl font-light font-serif italic tracking-tight text-black dark:text-white">
                  {project.title}
                </h2>

                <div className="flex gap-3 text-lg text-gray-400">
                  <a
                    href={project.LiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black  dark:hover:text-white transition-colors"
                  >
                    <IoEarthOutline />
                  </a>
                  <a
                    href={project.GithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    <LuGithub />
                  </a>

                </div>
              </div>

              <p className="text-sm font-main font-semibold text-black/70 dark:text-gray-400 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Bottom Section */}
            <div className="mt-2 pt-1 flex items-center justify-between">

              {/* Status Badge */}
              <span
                className={`text-xs px-3 py-1 rounded-full border flex items-center gap-2
    ${project.status === "Completed"
                    ? "bg-green-500/20 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                    : "bg-red-500/20 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
                  }
  `}
              >
                <div
                  className={`h-2 w-2 rounded-full animate-pulse
      ${project.status === "Completed"
                      ? "bg-green-700 dark:bg-green-400"
                      : "bg-red-700 dark:bg-red-400"
                    }
    `}
                ></div>

                {project.status}
              </span>
              {/* View Details */}
              <button className="flex items-center gap-2 text-sm text-black/70 hover:text-black dark:text-gray-400 
          dark:hover:text-white transition-all duration-300 group/view">

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