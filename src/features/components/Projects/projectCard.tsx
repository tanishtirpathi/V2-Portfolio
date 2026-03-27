"use client";

import Image from "next/image";
import { ProjectDetail } from "./project";
import { LuGithub } from "react-icons/lu";
import { IoEarthOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { TECH_STACK } from "@/features/data/techstack";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectCardProps {
  limit?: number;
  typeFilter?: string;
}

export const ProjectCard = ({ limit, typeFilter }: ProjectCardProps) => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-0">
      <AnimatePresence mode="popLayout">
        {projectsToShow.length === 0 && (
          <motion.div
            key="empty-state"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="col-span-full rounded-xl border border-dashed border-neutral-300 bg-neutral-100/60 px-6 py-10 text-center text-sm text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-400"
          >
            No projects found for this type.
          </motion.div>
        )}

        {projectsToShow.map((project, index) => (
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
            className="group rounded-xl border border-neutral-200 dark:border-neutral-800 
          bg-gray-100 dark:bg-neutral-900 overflow-hidden 
          transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
          {/* Image */}
          <div className="relative w-full h-40 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-2">
            {/* Title + Actions */}
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-medium text-neutral-900 dark:text-white">
                {project.title}
              </h2>

              <div className="flex gap-3 text-neutral-400">
                <a
                  href={project.LiveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-white transition"
                >
                  <IoEarthOutline size={18} />
                </a>
                <a
                  href={project.GithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-white transition"
                >
                  <LuGithub size={18} />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-4">
              {project.type.map((type) => (
                <span
                  key={type}
                  className="text-xs px-2 py-0.5 rounded
                  bg-gray-100 dark:bg-gray-800  
                  border border-dashed  border-gray-300 dark:border-gray-700
                  text-neutral-600 dark:text-gray-300"
                >
                  {type}
                </span>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 pl-0.5">
              {project.tech.map((techKey) => {
                const tech = TECH_STACK.find((t) => t.key === techKey);
                if (!tech) return null;

                return (
                  <div key={tech.key}>
                    {tech.theme ? (
                      <>
                        <Image
                          src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`}
                          alt={tech.title}
                          width={18}
                          height={18}
                          className="block dark:hidden opacity-80 hover:opacity-100 transition"
                          unoptimized
                        />
                        <Image
                          src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-dark.svg`}
                          alt={tech.title}
                          width={18}
                          height={18}
                          className="hidden dark:block opacity-80 hover:opacity-100 transition"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`}
                        alt={tech.title}
                        width={18}
                        height={18}
                        className="opacity-80 hover:opacity-100 transition"
                        unoptimized
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
              {/* Status */}
              <span
                className={`text-xs px-2 py-1 rounded-full border font-sans font-semibold flex items-center gap-1
                ${
                  project.status === "Completed"
                    ? "border-neutral-300 dark:border-green-700 text-green-600 dark:text-green-700"
                    : "border-neutral-300 dark:border-gray-700 text-gray-500"
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-current" />
                {project.status}
              </span>

              {/* CTA */}
              <Link
                href={project?.location || "/projects"}
                className="flex items-center gap-1 text-sm text-neutral-600 
                hover:text-black dark:hover:text-white transition"
              >
                View
                <HiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};