"use client"

import Image from "next/image"
import { TECH_STACK } from "@/features/data/techstack"

export function TechStack() {
  return (
    <section id="stack" className="px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Stack
      </h2>

      <ul
        className="
          grid
          grid-cols-4
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
            className="flex items-center justify-center"
          >
            <a
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tech.title}
              className="group flex flex-col items-center"
            >
              <Image
                src={`https://assets.chanhdai.com/images/tech-stack-icons/${
                  tech.theme ? `${tech.key}-light` : tech.key
                }.svg`}
                alt={tech.title}
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
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}