"use client"

import { socialLinks } from "@/features/data/socallink"
import { motion } from "framer-motion"

export default function SocialLinks() {
  return (
    <motion.div
      className="flex items-center mt-5 px-1 gap-2 text-gray-500 text-xl mb-5"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {socialLinks.map((link, index) => {
        const Icon = link.icon

        return (
          <motion.a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
            className={`relative group ${link.color}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 * index }}
          >
            <Icon />

            <span
              className="
                absolute -top-8 left-1/2 -translate-x-1/2
                text-xs
                bg-black/80 text-white
                dark:bg-white dark:text-black
                px-2 py-1
                rounded
                whitespace-nowrap
                pointer-events-none
                opacity-0 translate-y-2 scale-90
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                transition-all duration-200
              "
            >
              {link.title}
            </span>
          </motion.a>
        )
      })}
    </motion.div>
  )
}