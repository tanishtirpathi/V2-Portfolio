"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setDarkMode(isDark)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setDarkMode(!darkMode)
  }

  return (
    <nav
      className="
        fixed
        top-4
        w-1/2
        z-50
        backdrop-blur-lg
        bg-white/80
        dark:bg-black/20
        dark:border-neutral-800
        rounded-lg
      "
    >
      <div className="max-w-5xl mx-auto font-mono font-semibold flex justify-end items-center py-2 px-4 gap-6 text-sm">

        <Link
          href="/"
          className="opacity-70 hover:opacity-100 hover:underline transition"
        >
          Main
        </Link>

        <Link
          href="/projects"
          className="opacity-70 hover:opacity-100 hover:underline transition"
        >
          Projects
        </Link>

        <Link
          href="/blogs"
          className="opacity-70 hover:opacity-100 hover:underline transition"
        >
          Blogs
        </Link>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

      </div>
    </nav>
  )
}