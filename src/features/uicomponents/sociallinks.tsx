"use client"
import { socialLinks } from "@/features/data/socallink"

export default function SocialLinks() {
  return (
    <div className="flex items-center mt-5 px-1 gap-2 text-gray-500 text-xl">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
            className={`relative group transition-colors duration-200 ${link.color}`}
          >
            <Icon />

            <span
              className="
                absolute -top-8 left-1/2 -translate-x-1/2
                text-xs
                bg-black text-white
                dark:bg-white dark:text-black
                px-2 py-1
                rounded
                opacity-0
                group-hover:opacity-100
                transition
                whitespace-nowrap
                pointer-events-none
              "
            >
              {link.title}
            </span>
          </a>
        )
      })}
    </div>
  )
}