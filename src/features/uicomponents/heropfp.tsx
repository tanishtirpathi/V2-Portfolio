"use client";
import SpeakNameButton from "@/components/layout/speakbutton";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full mb-5">

      {/* Background */}
      <div className="relative w-full h-[220px] sm:h-[260px]">
        <Image
          src="/images/bg.jpg"
          alt="Background banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay (optional for better readability) */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Centered Text */}
        <span className="absolute inset-0 flex items-center justify-center text-white font-serif italic text-base tracking-widest [text-shadow:0_4px_15px_rgba(0,0,0,0.9)]">
        I am not saying I am best , But lets just say The Bar is High
        </span>
      </div>
      {/* Profile Content */}
      <div className="relative max-w-6xl mx-auto ">
        <div className="flex items-end gap-4 -mt-16 sm:-mt-10">

          {/* PFP */}
          <Image
            src="/images/pfp.jpg"
            alt="Tanish Tirpathi"
            width={120}
            height={120}
            priority
            className="rounded-full shadow-xl object-cover w-14 h-24 sm:w-36 sm:h-36"
          />

          {/* Info */}
          <div className="pb-4 flex flex-col items-start ">
            <h1 className="text-2xl sm:text-4xl font-serif italic">
              Tanish Tirpathi
              <SpeakNameButton />
            </h1>

            <p className="text-gray-500 font-semibold font-mono text-xs ">
              Full Stack Developer
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}