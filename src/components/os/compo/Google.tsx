"use client"

import { FormEvent, useState } from "react"

export default function Google() {
  const [query, setQuery] = useState("")

  const openGoogleHome = () => {
    window.open("https://www.google.com", "_blank", "noopener,noreferrer")
  }

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = query.trim()

    if (!trimmed) {
      openGoogleHome()
      return
    }

    const url = `https://www.google.com/search?q=${encodeURIComponent(trimmed)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="h-full w-full text-white bg-black/30">
      <div className="h-full w-full border border-white/20 bg-black/10 backdrop-blur-xl flex flex-col items-center justify-start pt-10 text-center px-4">
        <h1 className="text-5xl font-light italic font-serif tracking-tight mb-5 select-none">
          <span className="text-[#4285F4]">S</span>
          <span className="text-[#EA4335]">e</span>
          <span className="text-[#FBBC05]">x</span>
          <span className="text-[#34A853]">y</span>
          <span className="mx-2" />
          <span className="text-[#4285F4]">S</span>
          <span className="text-[#EA4335]">e</span>
          <span className="text-[#FBBC05]">a</span>
          <span className="text-[#34A853]">r</span>
          <span className="text-[#4285F4]">c</span>
          <span className="text-[#EA4335]">h</span>
        </h1>
        <form onSubmit={onSearch} className="w-full max-w-xl flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="tanishtirpathi.me"
            className="flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/60 outline-none focus:border-white/50"
          />
          <button
            type="submit"
            className="rounded-md px-6 py-2 bg-white/70 text-black font-semibold hover:bg-white cursor-pointer transition-colors"
          >
            Search
          </button>
        </form>

        <button
          type="button"
          onClick={openGoogleHome}
          className="mt-4 text-sm underline underline-offset-4 text-white/90 hover:text-white"
        >
          Open Google Home
        </button>
      </div>
    </section>
  )
}
