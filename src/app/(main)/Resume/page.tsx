"use client"

import DiagonalPattern from "@/features/components/LRBorder/Lrborder"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-4 relative">

      <DiagonalPattern side="left" />
      <DiagonalPattern side="right" />

      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif italic font-light">
          Resume Section
        </h2>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl shadow-xl p-4">

        <div className="relative w-full h-[600px] rounded-lg overflow-hidden border">
          <Image
            src="/Resume.jpg"
            alt="Resume Preview"
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="/Resume.jpg"
            download
            className="px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

      </div>

    </div>
  )
}