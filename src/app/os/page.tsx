import Link from "next/link"

export default function OSPage() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center">
      <h1 className="text-3xl font-serif font-light">
        Interactive OS Mode in development. Please check back later after 13 march.
      </h1>
      <div className="fixed top-5 right-5">
        <button
          className="
    relative
    px-3 py-1
    rounded-md
    font-sans
    font-main
    backdrop-blur-md
    bg-gray-200/30 
    border
    border-white
    text-gray-900
    shadow-md
    shadow-black
    transition-all
    duration-300
    ease-in-out
    hover:scale-[1.01]
    hover:bg-white/40
  "
        >
          <Link href="/" className="text-black no-underline">
            Back to Home
          </Link>
        </button>
      </div>
    </main>
  )
}