"use client";

import Image from "next/image";
import { ProjectDetail } from "./project";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  limit?: number;
  typeFilter?: string;
}

export const ProjectCard = ({ limit, typeFilter }: ProjectCardProps) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const normalizedTypeFilter = typeFilter?.trim().toLowerCase();

  const filteredProjects =
    normalizedTypeFilter && normalizedTypeFilter !== "all"
      ? ProjectDetail.filter((project) =>
          project.type.some(
            (type) => type.trim().toLowerCase() === normalizedTypeFilter,
          ),
        )
      : ProjectDetail;

  const projectsToShow = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const handleMouseEnter = (projectId: string) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="flex flex-col gap-6 px-12 md:px-0">
      <AnimatePresence mode="popLayout">
        {projectsToShow.length === 0 && (
          <motion.div 
            key="empty-state"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-xl border border-dashed border-neutral-300 bg-neutral-100/60 px-2 py-10
             text-center text-sm text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-400"
          >
            No projects found for this type.
          </motion.div>
        )}

        {projectsToShow.map((project, index) => {
          const isHovered = hoveredProject === project.location;
          const isOtherHovered = hoveredProject !== null && !isHovered;

          return (
            <motion.div
              layout
              key={project.location || project.title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{
                layout: { type: "spring", stiffness: 420, damping: 34 },
                duration: 0.25,
                ease: "easeOut",
                delay: index * 0.03,
              }}
              onMouseEnter={() => handleMouseEnter(project.location || project.title)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className={`group relative border-b border-neutral-200 dark:border-neutral-800 
              bg-transparent overflow-visible transition-all duration-300 cursor-pointer ${
                isOtherHovered ? "blur-sm opacity-50" : ""
              }`}
            >
              {/* Floating Image on Hover */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-0 left-0 w-80 h-44 pointer-events-none z-50"
                  style={{
                    x: mousePos.x + 30,
                    y: mousePos.y - 160,
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg shadow-lg "
                  />
                </motion.div>
              )}
         
              {/* Content */}
              <Link 
                href={project?.location || "/projects"}
                className="relative z-10 block py-6 px-3 min-h-24 flex flex-col justify-between"
              >
                {/* Title with Status Dot */}
                <div className="flex items-center gap-3">
                  
                  <h2 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-white
                    transition-colors font-serif italic">
                    {project.title}
                  </h2>
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      project.status === "Completed"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 transition-colors 
                leading-relaxed line-clamp-1">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};