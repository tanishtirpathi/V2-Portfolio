"use client";
import SpeakNameButton from "@/components/layout/speakbutton";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Background */}
      <div className="relative w-full h-[200px] sm:h-[180px] md:h-[220px]">
        <Image
          src="/images/bg.jpg"
          alt="Background banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <span className="text-white font-serif italic text-sm sm:text-base md:text-lg tracking-widest drop-shadow-xl">
            I am not saying I am best, but let’s just say the bar is high
          </span>
        </div>
      </div>

      {/* Profile Content */}
      <div className="relative mx-auto max-w-6xl px-2">
        <div className="flex items-end gap-4 -mt-5 sm:-mt-10">

          {/* PFP */}
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-30 md:h-30">
            <Image
              src="/images/pfp.jpg"
              alt="Tanish Tirpathi"
              fill
              priority
              className="rounded-full  object-cover "
            />
          </div>

          {/* Info */}
          <div className="pb-3 flex flex-col">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-serif italic flex items-center gap-2">
              Tanish Tirpathi
              <SpeakNameButton />
            </h1>

            <p className="text-gray-500 font-semibold font-mono text-xs md:xs lg:text-xs">
              Full Stack Developer
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}