"use client"

import { useState } from "react"
import Image from "next/image"
import { dockApps } from "../data/dockApps"

const BASE_SIZE = 56
const MAX_SCALE = 1.8

export default function Dock() {
  const [mouseX, setMouseX] = useState<number | null>(null)

  return (
    <div
      onMouseMove={(e) => setMouseX(e.clientX)}
      onMouseLeave={() => setMouseX(null)}
      className="
      fixed bottom-6 left-1/2 -translate-x-1/2
      flex items-end gap-2
      px-4 py-3
      rounded-2xl
      bg-black/50 backdrop-blur-xl
      border border-white/10
      shadow-2xl
      "
    >
      {dockApps.map((app, i) => {
        if (app.divider) {
          return (
            <div
              key={i}
              className="w-[2px] h-12 bg-white/20 mx-2 rounded"
            />
          )
        }

        let scale = 1

        if (mouseX !== null) {
          const distance = Math.abs(mouseX - i * 70)

          scale =
            1 +
            (MAX_SCALE - 1) *
              Math.exp(-(distance * distance) / 20000)
        }

        const size = BASE_SIZE * scale

        return (
          <div
            key={app.id || i}
            style={{
              width: size,
              height: size,
            }}
            className="
            flex items-center justify-center
            transition-all duration-200
            cursor-pointer
            "
          >
            <Image
              src={app.icon || ""}
              alt={app.label || "app"}
              width={BASE_SIZE}
              height={BASE_SIZE}
              className="rounded-xl object-cover"
            />
          </div>
        )
      })}
    </div>
  )
}