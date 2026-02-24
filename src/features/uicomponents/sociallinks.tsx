"use client"
import {socialLinks} from "@/features/data/socallink"
export default function SocialLinks() {
  return (
    <div className="flex items-center mt-5 px-1 gap-3 text-gray-500 text-xl">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
            className={`
              transition-colors duration-200
              ${link.color}
            `}
          >
            
            <Icon />
          </a>
        )
      })}
    </div>
  )
}