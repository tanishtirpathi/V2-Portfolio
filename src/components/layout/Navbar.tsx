"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sun, Moon } from "lucide-react"
import { GitHubStars } from "../ui/github-stars"
import { TooltipProvider } from "../ui/tooltip"

type ThemePreference = "light" | "dark" | "system"

const resolveDark = (theme: ThemePreference) => {
  if (theme === "dark") return true
  if (theme === "light") return false
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const stored = localStorage.getItem("theme")
    const currentTheme: ThemePreference =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system"

    const applyTheme = (theme: ThemePreference) => {
      const isDark = resolveDark(theme)
      document.documentElement.classList.toggle("dark", isDark)
      setDarkMode(isDark)
    }

    applyTheme(currentTheme)

    const handleSystemChange = () => {
      if ((localStorage.getItem("theme") ?? "system") === "system") {
        applyTheme("system")
      }
    }

    media.addEventListener("change", handleSystemChange)
    return () => media.removeEventListener("change", handleSystemChange)
  }, [])

  const toggleTheme = () => {
    const nextTheme: ThemePreference = darkMode ? "light" : "dark"
    localStorage.setItem("theme", nextTheme)
    const isDark = resolveDark(nextTheme)
    document.documentElement.classList.toggle("dark", isDark)
    setDarkMode(isDark)
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
        border
        border-transparent
        dark:border-white/10
        backdrop-blur-lg
        bg-white/10
        dark:bg-black/20
        md:rounded-lg
        rounded-none
        lg:rounded-lg
        shadow-md
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
        <div className="flex items-center gap-6 font-sans font-semibold">
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
          <TooltipProvider>
            <div><GitHubStars repo="tanishtirpathi/V2-Portfolio" stargazersCount={2} /></div></TooltipProvider>
        </div>

      </div>
    </nav>
  )
}