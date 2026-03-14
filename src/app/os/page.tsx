import Link from "next/link"
import Image from "next/image"
import TopBar from "@/components/os/compo/TopBar"
import Dock from "@/components/os/compo/Dock"
import { FaHome } from "react-icons/fa";

export default function OSPage() {
  return (
    <main className="relative min-h-screen text-black flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/OS/Bglight.jpg"
        alt="OS background light"
        fill
        priority
        className="object-cover -z-10 dark:hidden transition-all duration-400"
      />

      {/* DARK MODE */}
      <Image
        src="/OS/BGdark.jpg"
        alt="OS background dark"
        fill
        priority
        className="object-cover -z-10 hidden dark:block transition-all duration-400"
      />

      {/* Optional blur overlay for readability */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] -z-10" />

      <TopBar />

      <h1 className="text-3xl font-serif italic  font-light text-center px-6 dark:text-white dark:bg-black/90
       rounded-md px-4 py-3 bg-white/90 text-black">
        Interactive OS Mode in development. Please check back later after 23 March.
      </h1>

    <Dock/>
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
        >  <Link href="/" className="text-white font-bold text-lg no-underline">
            <FaHome /></Link>
        </button>
      </div>
    </main>
  )
}