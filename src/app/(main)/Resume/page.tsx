"use client"

import DiagonalPattern from "@/features/components/LRBorder/Lrborder"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-4 relative">

      <DiagonalPattern side="left" />
      <DiagonalPattern side="right" />

      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif italic font-light">
          Resume Section
        </h2>
        <p className="font-main font-bold text-black/30 dark:text-white/20">Some people see a sheet of paper. I see my resume.</p>      </div>

      <div className="bg-[#c4c4c4] dark:bg-[#18181b] border-2 border-white dark:border-black rounded-xl shadow-xl p-4">

        <div className="relative w-full h-[700px] rounded-lg overflow-hidden border">
          <div className="mx-auto max-w-2xl">
            <iframe
              src="https://drive.google.com/file/d/1V5Sx4a7f4NAJRqR3DA7FpDdbpiJPBHyz/preview"
              className="min-h-screen w-full"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="https://drive.google.com/uc?export=download&id=1V5Sx4a7f4NAJRqR3DA7FpDdbpiJPBHyz"
            className="px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

      </div>

    </div>
  )
}