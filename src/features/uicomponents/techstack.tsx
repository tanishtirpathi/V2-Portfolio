"use client"

import Image from "next/image"
import { TECH_STACK } from "@/features/data/techstack"
import SectionBorder from "@/components/layout/seprators"

export function TechStack() {
  return (
    <section id="stack" className="px-1 py-6 mt-10 mb-20">
      <h2 className="text-3xl font-sans text-black/90 dark:text-gray-300 font-bold ">
        Tech Stack
      </h2>
      <p className="text-gray-700 dark:text-gray-400 mb-4 font-mono text-xs "> Tech behind my all systems </p>
      <SectionBorder className="mb-5" />
      <ul
        className="
          grid
          grid-cols-12
          sm:grid-cols-6
          md:grid-cols-8
          lg:grid-cols-12
          gap-3
          max-w-7xl
          mx-auto
        "
      >
        {TECH_STACK.map((tech) => (
          <li
            key={tech.key}
            className="relative flex items-center justify-center group"
          >
            {/* Hover Label */}
            <span
              className="
                absolute -top-7
                text-xs
                bg-black text-white
                dark:bg-white dark:text-black/80
                px-2 py-1
                rounded
                opacity-0
                group-hover:opacity-100
                transition
                whitespace-nowrap
                pointer-events-none
              "
            >
              {tech.title}
            </span>

            <a
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tech.title}
              className="flex items-center justify-center"
            >
              {tech.theme ? (
                <>
                  {/* Light Mode Icon */}
                  <Image
                    src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`}
                    alt={`${tech.title} icon`}
                    width={32}
                    height={32}
                    className="
        block dark:hidden
        transition-transform duration-200
        group-hover:scale-110
        w-7 h-7
        sm:w-8 sm:h-8
        md:w-9 md:h-9
        lg:w-10 lg:h-10
      "
                    unoptimized
                  />

                  {/* Dark Mode Icon */}
                  <Image
                    src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-dark.svg`}
                    alt={`${tech.title} icon`}
                    width={32}
                    height={32}
                    className="
        hidden dark:block
        transition-transform duration-200
        group-hover:scale-110
        w-7 h-7
        sm:w-8 sm:h-8
        md:w-9 md:h-9
        lg:w-10 lg:h-10
      "
                    unoptimized
                  />
                </>
              ) : (
                <Image
                  src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`}
                  alt={`${tech.title} icon`}
                  width={32}
                  height={32}
                  className="
      transition-transform duration-200
      group-hover:scale-110
      w-7 h-7
      sm:w-8 sm:h-8
      md:w-9 md:h-9
      lg:w-10 lg:h-10
    "
                  unoptimized
                />
              )}
            </a>
          </li>
        ))}
      </ul><SectionBorder className="mt-5" />
    </section>
  )
}