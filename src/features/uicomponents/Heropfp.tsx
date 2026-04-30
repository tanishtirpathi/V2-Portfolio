"use client";

import Image from "next/image";
import { PiCoffeeBold } from "react-icons/pi";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="relative w-full h-[200px] sm:h-[180px] md:h-[220px]">
        <Image
          src="/images/bg.webp"
          alt="Background banner"
          fill
          priority
          sizes="100vw"
          className="object-cover rounded"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div
          className="absolute inset-0 flex items-center justify-center px-4 text-center"
         
        >
          <span className="text-white font-serif italic text-sm sm:text-base md:text-lg tracking-widest drop-shadow-xl">
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
              src="/images/pfp.webp"
              alt="Tanish Tirpathi"
              fill
              priority
              className="rounded-full object-cover"
            />
          
            <div className="h-6 w-6 rounded-full border-1 cursor-pointer  
            flex items-center justify-center bg-black bottom-4 absolute right-[1] 
            border-black text-white group dark:bg-white/70 dark:border-white/80 dark:text-black" > 
          
          
          <PiCoffeeBold />
          
         
            <span
              className="
                absolute -top-8 left-15 -translate-x-1/2
                text-xs
                bg-black/80 text-white
                font-bold
                dark:bg-white dark:text-black
                px-2 py-1
                rounded
                whitespace-nowrap
                pointer-events-none
                opacity-0 translate-y-2 scale-90
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                transition-all duration-200
              "
            >
              Had 3 cup today of coffee 
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