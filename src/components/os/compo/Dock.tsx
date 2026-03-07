"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { dockApps } from "../data/dockApps"

type DockApp = {
  id?: string
  label?: string
  icon?: string
  component?: string
  url?: string
  divider?: boolean
}

export default function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleClick = (app: DockApp) => {
    if (app.url) {
      window.open(app.url, "_blank")
    }
  }

  return (
    <div
      className="
      fixed bottom-4 left-1/2 -translate-x-1/2
      flex items-end gap-2
      px-4 py-2 rounded-xl
      bg-white/10 dark:bg-black/55 backdrop-blur-2xl
      border border-white/20
      shadow-2xl
      "
      style={{ height: "70px", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
    >
      {/* Tooltip */}
      {hoveredIndex !== null && dockApps[hoveredIndex]?.label && (
        <div
          className="
          absolute -top-12 left-1/2 -translate-x-1/2
          px-4 py-1 rounded-md
         bg-white/40 dark:bg-black/70 text-black dark:text-white
          text-sm font-medium
          backdrop-blur-xl
          shadow-xl font-sans font-semibold
          pointer-events-none
          "
        >
          {dockApps[hoveredIndex]?.label}
        </div>
      )}

      {dockApps.map((app: DockApp, index: number) => {
        if (app.divider) {
          return (
            <div
              key={`divider-${index}`}
              className="w-[2px] h-13 bg-white/25 rounded-md mx-2"
            />
          )
        }

        const isHovered = hoveredIndex === index

        return (
          <motion.div
            key={app.id ?? index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(app)}
            className="
            flex flex-col items-center justify-center
            w-[58px]
            cursor-pointer
            "
            animate={{
              y: isHovered ? -10 : 0,
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
          >
            <div
              className="
              w-[50px] h-[50px]
              rounded-lg
              bg-white/20 dark:bg-white/40
              backdrop-blur-xl
              border border-white/20
              shadow-lg
              flex items-center justify-center
              "
            >
              {app.icon && (
                <Image
                  src={app.icon}
                  alt={app.label ?? "Dock App"}
                  width={42}
                  height={42}
                  className="object-contain rounded-md"
                />
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}