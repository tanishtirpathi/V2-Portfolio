"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sun, Moon } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof document === "undefined") return false
    return document.documentElement.classList.contains("dark")
  })

  const toggleTheme = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        document.documentElement.classList.toggle("dark")
        setDarkMode(!darkMode)
      })
    } else {
      document.documentElement.classList.toggle("dark")
      setDarkMode(!darkMode)
    }
  }
  return (
    <motion.nav
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
        <div className="flex items-center gap-6 font-sans font-bold">
          <Link
            href="/"
            className="opacity-70 hover:opacity-100 hover:underline transition"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="opacity-70 hover:opacity-100 hover:underline transition"
          >
            Projects
          </Link>
          <Link
            href="/Resume"
            className="opacity-70 hover:opacity-100 hover:underline transition"
          >
            Resume
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
          <a
            href="https://github.com/tanishtirpathi/V2-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="
              group
              inline-flex items-center gap-2
              px-3 py-1.5
              rounded-full
              bg-gradient-to-r from-neutral-800 to-neutral-700
              text-white
              shadow-sm
              hover:shadow-md hover:scale-105
             
              transition-all duration-200
            "
          >
            <FaGithub size={16} />
            <FaStar
              size={14}
              className="text-amber-300 group-hover:text-amber-200 transition-colors"
            />
            
          </a>
        </div>

      </div>
    </motion.nav>
  )
}