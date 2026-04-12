"use client"

import LiveAge from "@/features/components/Age/Liveage";



export default function IntroAbout() {
    return (
        <div className="px-2 mt-6 max-w-3xl mb-4">
            <p className="text-black/60 dark:text-gray-400  leading-relaxed text-sm md:text-lg font-sans  ">

                Ya I love Building full stack things with {" "}

                <span className="inline-flex items-center gap-1 rounded italic text-yellow-500 font-serif">
                    <span className="dark:text-white/90 text-black font-light">JavaScript</span>
                </span>{" "}

                &{" "}

                <span className="inline-flex items-center gap-1 rounded  italic text-blue-500 font-serif">
                    <span className="dark:text-white/90 text-black font-light">TypeScript</span>
                </span>{" "}
                <br />
            </p>
            <span className="mt-2 font-sans text-black/60 dark:text-gray-400 font-semibold  text-sm md:text-lg">
                Mostly powered by strong
                <span className="dark:text-white/90 text-black  text-sm md:text-lg font-serif italic px-1  font-light">
                    coffee </span>
                and stubborn
                <span className="dark:text-white/90 text-black  text-sm md:text-lgfont-serif italic px-1  font-light">
                    ambition </span>
            </span>
            <span className="mt-5 font-sans text-black/60 dark:text-gray-400 font-semibold block  text-sm md:text-lg">
                I&apos;ve been here since <LiveAge /> years
            </span>
        </div>
    )
}