"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
        top-0
        md:top-2
        lg:top-2
        w-full md:w-4/5 lg:w-1/2
        z-50
        backdrop-blur-lg
        bg-white/10
        dark:bg-black/20
        dark:border-neutral-800
        md:rounded-lg
        rounded-none
        lg:rounded-lg
      "
    >
      <div className="max-w-5xl mx-auto font-mono font-semibold flex justify-between items-center py-2 px-4 text-sm">

        {/* Left side image */}
        <Link href="/" className="flex items-center hover:transform hover:scale-105 transition duration-200 ease-in-out">
          <Image
            src="/images/Top.jpg" 
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md object-cover"
          />
        </Link>

        {/* Right side links */}
        <div className="flex items-center gap-6 font-sans">
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
            href="/blog"
            className="opacity-70 hover:opacity-100 hover:underline transition"
          >
            Blogs
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-md cursor-pointer transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

      </div>
    </nav>
  )
}