"use client";

import Image from "next/image";
import { PiCoffeeBold } from "react-icons/pi";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="relative w-full h-[200px] sm:h-[180px] md:h-[220px] overflow-hidden rounded">
        <Image
          src="/images/bgtop.webp"
          alt="Background banner"
          fill
          priority
          sizes="100vw"
          className="object-cover "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Bottom fade to transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-white 
        dark:from-[#0a0a0a] to-transparent to-60%" />


        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <span className="text-white drop-shadow-xl
          font-serif italic text-sm sm:text-base md:text-lg tracking-widest drop-shadow-xl">
            I am not saying I am best, but let’s just say the bar is high
          </span>
        </div>
      </div>
      {/* Profile Content */}
      <div
        className="relative mx-auto max-w-6xl px-2"

      >
        <div className="flex items-end gap-4 -mt-5 sm:-mt-10">


          <div
            className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-30 md:h-30"

          >
            <Image
              src="/images/pfptwo.webp"
              alt="Tanish Tirpathi"
              fill
              priority
              className="rounded-full object-cover"
            />

            <div className="h-6 w-6 rounded-full border-1 cursor-pointer  
            flex items-center justify-center bg-[#e3f2fd] bottom-4 absolute right-[1] 
            border-[#64b5f6] text-[#0d47a1] group dark:bg-[#1565c0] dark:border-[#64b5f6] dark:text-[#e3f2fd]" >


              <PiCoffeeBold />


                <span
                  className="
                  absolute -top-8 left-1/2 -translate-x-1/2
                  text-xs
                  bg-[#0d47a1] text-[#e3f2fd]
                  font-bold
                  dark:bg-[#e3f2fd] dark:text-[#0d47a1]
                  px-2 py-1
                  rounded-md
                  whitespace-nowrap
                  pointer-events-none
                  opacity-0 translate-y-2 scale-90
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                  transition-all duration-200
                "
                >
                  3 Cup today ☕
                </span>
            </div>


          </div>

          {/* Info */}
          <div className="pb-3 flex flex-col">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-serif  italic flex items-center gap-2"

            >
              Tanish Tirpathi
            </h1>

            <p
              className="text-gray-500 font-light font-mono text-xs md:text-xs lg:text-xs"
            >
              Engineer / Polymath
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}