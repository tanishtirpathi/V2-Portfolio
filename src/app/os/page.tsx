"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import TopBar from "@/components/os/compo/TopBar"
import Dock from "@/components/os/compo/Dock"
import About from "@/components/os/compo/About"
import Soon from "@/components/os/compo/soon"
import { type DockApp } from "@/components/os/data/dockApps"
import { FaHome } from "react-icons/fa"
import Blogs from "@/components/os/compo/Blogs"
import Google from "@/components/os/compo/Google"

type WindowApp = {
  id: string
  title: string
  component: string
}

type WindowRect = {
  x: number
  y: number
  width: number
  height: number
}

const WINDOW_WIDTH = 980
const WINDOW_HEIGHT = 520

export default function OSPage() {
  const [activeApp, setActiveApp] = useState<WindowApp | null>(null)
  const [isMinimized, setIsMinimized] = useState(false)
  const [windowRect, setWindowRect] = useState<WindowRect>({
    x: 80,
    y: 60,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  })
  const [dragState, setDragState] = useState<{ offsetX: number; offsetY: number } | null>(null)

  useEffect(() => {
    const setInitialRect = () => {
      const width = Math.min(WINDOW_WIDTH, window.innerWidth - 24)
      const height = Math.min(WINDOW_HEIGHT, window.innerHeight - 96)
      const x = Math.max(12, (window.innerWidth - width) / 2)
      const y = Math.max(40, (window.innerHeight - height) / 2)
      setWindowRect({ x, y, width, height })
    }

    setInitialRect()
    window.addEventListener("resize", setInitialRect)
    return () => window.removeEventListener("resize", setInitialRect)
  }, [])

  useEffect(() => {
    if (!dragState) return

    const onPointerMove = (event: MouseEvent) => {
      const maxX = Math.max(12, window.innerWidth - windowRect.width - 12)
      const maxY = Math.max(40, window.innerHeight - windowRect.height - 96)
      const nextX = Math.min(maxX, Math.max(12, event.clientX - dragState.offsetX))
      const nextY = Math.min(maxY, Math.max(40, event.clientY - dragState.offsetY))

      setWindowRect((prev) => ({ ...prev, x: nextX, y: nextY }))
    }

    const onPointerUp = () => setDragState(null)

    window.addEventListener("mousemove", onPointerMove)
    window.addEventListener("mouseup", onPointerUp)

    return () => {
      window.removeEventListener("mousemove", onPointerMove)
      window.removeEventListener("mouseup", onPointerUp)
    }
  }, [dragState, windowRect.height, windowRect.width])

  const componentRegistry = useMemo(
    () => ({
      about: (title: string) => <About title={title} />,
      blogs: (title: string) => <Blogs />,
      google: (title: string) => <Google />,
      soon: (title: string) => (
        <Soon
          title={`${title} app is opening soon`}
          subtitle="You can already launch apps from the dock. Full app content is being added next."
        />
      ),
    }),
    []
  )

  const handleOpenApp = (app: DockApp) => {
    if (!app.component) return

    setActiveApp({
      id: app.id ?? app.label ?? app.component,
      title: app.label ?? app.id ?? "App",
      component: app.component,
    })
    setIsMinimized(false)
  }

  const closeWindow = () => {
    setActiveApp(null)
    setIsMinimized(false)
    setDragState(null)
  }

  const minimizeWindow = () => {
    if (!activeApp) return
    setIsMinimized(true)
    setDragState(null)
  }

  const restoreWindow = () => {
    setIsMinimized(false)
  }

  const startDragging = (event: React.MouseEvent<HTMLElement>) => {
    setDragState({
      offsetX: event.clientX - windowRect.x,
      offsetY: event.clientY - windowRect.y,
    })
  }

  const activeComponent =
    activeApp &&
    (() => {
      const rawKey = activeApp.component || activeApp.title
      const normalizedKey = rawKey.toLowerCase().replace(/\s+/g, "")

      const registryWithAliases = {
        ...componentRegistry,
        aboutme: componentRegistry.about,
      }

      const resolver = registryWithAliases[normalizedKey as keyof typeof registryWithAliases]

      if (resolver) {
        return resolver(activeApp.title)
      }

      return (
        <Soon
          title={`${activeApp.title} app is opening soon`}
          subtitle="This app does not have a dedicated page yet, so a placeholder is shown for now."
        />
      )
    })()

  const appTitle = activeApp?.title ?? "Finder"

  return (
    <main className="relative min-h-screen text-black flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/OS/bglight.webp"
        alt="OS background light"
        fill
        priority
        className="object-cover -z-10 dark:hidden transition-all duration-400"
      />

      {/* DARK MODE */}
      <Image
        src="/OS/bgdark.webp"
        alt="OS background dark"
        fill
        priority
        className="object-cover -z-10 hidden dark:block transition-all duration-400"
      />

      {/* Optional blur overlay for readability */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] -z-10" />

      <TopBar appTitle={appTitle} />

    
      {activeApp && !isMinimized && (
        <section
          className="
          fixed z-30
          rounded-md overflow-hidden
          border border-white/20
          bg-black/10 backdrop-blur-xl
          shadow-2xl
          "
          style={{
            left: `${windowRect.x}px`,
            top: `${windowRect.y}px`,
            width: `${windowRect.width}px`,
            height: `${windowRect.height}px`,
          }}
        >
          <header
            className="
            h-10 px-4 bg-black/60 
            flex items-center
            relative
            cursor-grab active:cursor-grabbing
            "
            onMouseDown={startDragging}
          >
            <div className="flex items-center gap-2 z-10">
              <button
                type="button"
                onClick={closeWindow}
                className="w-3 h-3 rounded-full bg-red-500"
                aria-label="Close window"
              />
              <button
                type="button"
                onClick={minimizeWindow}
                className="w-3 h-3 rounded-full bg-yellow-500"
                aria-label="Minimize window"
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-green-500 opacity-60 cursor-not-allowed"
                aria-label="Maximize unavailable"
                disabled
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-sm text-white/90 font-medium">{activeApp.title}</div>
            </div>
          </header>

          <div className="h-[calc(100%-2.5rem)] overflow-auto">{activeComponent}</div>
        </section>
      )}

      {activeApp && isMinimized && (
        <button
          type="button"
          onClick={restoreWindow}
          className="
          fixed bottom-24 left-1/2 -translate-x-1/2 z-40
          px-4 py-2 rounded-xl
          bg-black/60 text-white text-sm
          border border-white/20 backdrop-blur-xl
          hover:bg-black/70 transition-colors
          "
          aria-label={`Restore ${activeApp.title}`}
        >
          Restore {activeApp.title}
        </button>
      )}

      <Dock onOpenComponent={handleOpenApp} />
      <div className="fixed top-8 right-5">
        <button
          className="
          relative
          px-3 py-1
          rounded-md
          text-gray-900
          shadow-md
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:bg-white/40
        "
        >
          <Link href="/" className="text-white font-bold text-lg no-underline">
            <FaHome />
          </Link>
        </button>
      </div>
    </main>
  )
}