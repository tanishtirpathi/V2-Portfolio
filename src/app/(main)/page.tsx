"use client";
import TopBg from "../../components/layout/topbg";
import Image from "next/image";
import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaEnvelope
} from "react-icons/fa6";
import { PiNotepadLight } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TechStack } from "@/features/uicomponents/techstack";
export default function Home() {
  return (
    <div className="max-w-5xl">
      <TopBg />
      <div className="flex items-center gap-3">
        <Image
          src="/images/PFP.png"
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full border-2 border-white/20  shadow-xl h-30 "
        />

        <div>
          <span className="flex items-center gap-4">
            <h1 className="font-serif italic text-4xl">Tanish Tirpathi</h1>
            <p className="text-gray-500 text-3xl font-bold font-main">- Full stack developer</p>
          </span>
          <span className="flex items-center ">
            <div className="h-2 w-2 bg-green-500 rounded-full">
            </div><h5 className="text-sm px-1 text-gray-500 font-mono font-semibold">
              available to work </h5>
          </span>
        </div>

      </div>
      <div>
        <div className="flex items-center mt-5 px-5 gap-2 text-gray-500 text-xl">

          <a href="https://twitter.com/tanishtirpathi" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200">
            <FaXTwitter />
          </a>

          <a href="https://linkedin.com/in/tanishtirpathi" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200">
            <FaLinkedin />
          </a>

          <a href="https://github.com/tanishtirpathi" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200">
            <FaGithub />
          </a>

          <a href="https://youtube.com/@tanishtirpathi" target="_blank" rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors duration-200">
            <FaYoutube />
          </a>

          <a href="https://instagram.com/tanish.speaks" target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-200">
            <FaInstagram />
          </a>

          <a href="https://pinterest.com/tanishtirpathi" target="_blank" rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors duration-200">
            <FaPinterest />
          </a>

          <a href="mailto:tanishtirpathi0@gmail.com"
            className="hover:text-green-400 transition-colors duration-200">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="px-4 mt-6 max-w-3xl">
        <p className="text-gray-400 leading-relaxed text-lg font-main ">

          I build full-stack systems with{" "}

          <span className="inline-flex items-center gap-1 rounded italic text-yellow-500 font-serif">
            <p className="text-white">JavaScript</p>
          </span>{" "}

          &{" "}

          <span className="inline-flex items-center gap-1 rounded  italic text-blue-500 font-serif">
            <p className="text-white">TypeScript</p>
          </span>{" "}

          — architecting scalable{" "}

          <span className=" text-white font-serif italic">
            React, Next.js,
          </span>{" "}and
          <span className=" text-white font-serif italic px-1">
            Node js
          </span>
          applications that turn complex ideas into production-ready software.

        </p>
        <span className="mt-2 font-main text-gray-400">
          Mostly powered by strong <span className="text-white font-serif italic ">coffee </span>
           and stubborn ambition ☕</span>
      </div>
      <div className="flex px-10 py-4 items-center gap-3 ">
        <RainbowButton variant="outline">
          <a href="https://docs.google.com/document/d/e/2PACX-1vSvmlZaSpYs7Z7JWNe2o1VddGUWKsqNUGaQmWqGMDRT-lMaMF5QwWDXeVDqat9EQFwf5Ec_BDmSXWTE/pub" target="_blank" rel="noopener noreferrer"
            className=" font-main font-semibold flex items-center gap-2"
          >Resume/CV <PiNotepadLight />
          </a></RainbowButton>
        <RainbowButton>
          <a href="https://x.com/tanishtirpathi" target="_blank" rel="noopener noreferrer"
            className=" font-main font-semibold flex items-center gap-2"
          >Connect <FiMessageSquare />
          </a></RainbowButton>
      </div>
      <TechStack/>
    </div>
  );
}