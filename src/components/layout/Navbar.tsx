"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sun, Moon } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { FaStar } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof document === "undefined") return false
    return document.documentElement.classList.contains("dark")
  })

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
      <div className="max-w-3xl mx-auto font-mono font-semibold flex justify-between items-center py-2 px-4 text-sm">

        {/* Left side image */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Top.webp"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md object-cover"
          />
        </Link>

        {/* Right side links */}
        <div className="flex items-center gap-6 font-sans font-bold">
          <Link
            href="/"
            className="opacity-70 hover:opacity-100 hover:underline"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="opacity-70 hover:opacity-100 hover:underline"
          >
            Projects
          </Link>
          <Link
            href="/Resume"
            className="opacity-70 hover:opacity-100 hover:underline"
          >
            Resume
          </Link>

          <Link
            href="/blog"
            className="opacity-70 hover:opacity-100 hover:underline"
          >
            Blogs
          </Link>
   
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md cursor-pointer"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://github.com/tanishtirpathi/V2-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="
              group
              inline-flex items-center gap-2
              px-3 py-1.5
              rounded-md
              bg-black/60
              text-white
              shadow-sm
              hover:shadow-md hover:bg-black/80 hover:scale-105
              transition-transform duration-200
             
            "
          >
            <FaGithub size={16} />
            <FaStar
              size={14}
              className="text-amber-300 group-hover:text-amber-200"
            />
            
          </a>
        </div>

      </div>
    </nav>
  )
}