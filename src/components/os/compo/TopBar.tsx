"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Bluetooth, Moon, Sun, Wifi } from "lucide-react"
import { menuData } from "@/components/os/data/Topmenu"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

type Props = {
  appTitle?: string
  setStage?: (stage: string) => void
}

export default function TopBar({ appTitle = "Finder" }: Props) {
  const [time, setTime] = useState("")
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false
    return localStorage.getItem("theme") === "dark"
  })

  // Theme toggle
  const toggleTheme = () => {
    setDark((prev) => !prev)
  }

  // Keep DOM class and local storage in sync with state
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  // Clock
  useEffect(() => {
    const update = () => {
      const now = new Date()

      const weekday = now.toLocaleString("en-US", { weekday: "short" })
      const month = now.toLocaleString("en-US", { month: "short" })
      const day = now.getDate()
      const time = now.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })

      setTime(`${weekday}, ${month} ${day} ${time}`)
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const hover =
    "px-2 py-[2px] rounded-md transition hover:bg-white/30 dark:hover:bg-white/10 active:scale-[0.97]"

  return (
    <div className="
      w-full h-8 flex items-center justify-between px-3 fixed top-0 z-50
      bg-white/10 dark:bg-black/20
      backdrop-blur-xl
      border-b border-black/10 dark:border-white/10
      text-black dark:text-white
    ">

      {/* LEFT */}
      <div className="flex items-center gap-2 text-xs font-medium">

        <div className="font-light font-serif italic text-lg px-2"><Link href="/"> Tanish </Link></div>

        {menuData.map((menu) => (
          <DropdownMenu key={menu.title}>
            <DropdownMenuTrigger
              className={`${hover} font-semibold font-sans text-sm`}
            >
              {menu.title}
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="
                mt-2 min-w-[180px]
                rounded-xl
                border border-white/20
                bg-white/20 dark:bg-black/50
                backdrop-blur-xl
                shadow-2xl
              "
            >
              {menu.items.map((item, i) =>
              "separator" in item ? (
                  <DropdownMenuSeparator key={i} />
                ) : (
                  <DropdownMenuItem
                    key={i}
                    className="text-sm hover:bg-white/20 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}

        <div className={`${hover} font-semibold font-sans text-sm`}>
          {appTitle}
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 text-xs">

        <Bluetooth className="w-4 h-4 cursor-pointer opacity-80 hover:opacity-100 transition" />
        <Wifi className="w-4 h-4 cursor-pointer opacity-80 hover:opacity-100 transition" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="cursor-pointer hover:scale-110 transition"
        >
          {dark ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className={hover}>
            {time}
          </DropdownMenuTrigger>
        </DropdownMenu>

      </div>
    </div>
  )
}