"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      className="relative w-full overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
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

        <motion.div
          className="absolute inset-0 flex items-center justify-center px-4 text-center"
          variants={fadeUp}
        >
          <span className="text-white font-serif italic text-sm sm:text-base md:text-lg tracking-widest drop-shadow-xl">
            I am not saying I am best, but let’s just say the bar is high
          </span>
        </motion.div>
      </div>

      {/* Profile Content */}
      <motion.div
        className="relative mx-auto max-w-6xl px-2"
        variants={fadeUp}
      >
        <div className="flex items-end gap-4 -mt-5 sm:-mt-10">

          {/* PFP */}
          <motion.div
            className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-30 md:h-30"
            variants={fadeUp}
          >
            <Image
              src="/images/pfp.jpg"
              alt="Tanish Tirpathi"
              fill
              priority
              className="rounded-full object-cover"
            />
          </motion.div>

          {/* Info */}
          <motion.div className="pb-3 flex flex-col" variants={fadeUp}>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-serif italic flex items-center gap-2"
              variants={fadeUp}
            >
              Tanish Tirpathi
            </motion.h1>

            <motion.p
              className="text-gray-500 font-light font-mono text-xs md:text-xs lg:text-xs"
              variants={fadeUp}
            >
              Engineer - Polymath
            </motion.p>
          </motion.div>

        </div>
      </motion.div>
    </motion.section>
  );
}