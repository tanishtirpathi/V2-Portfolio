"use client";
import TopBg from "../../components/layout/topbg";
import HeroPfp from "@/features/uicomponents/heropfp";
import SocialLinks from "@/features/uicomponents/sociallinks";
import { PiNotepadLight } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TechStack } from "@/features/uicomponents/techstack";
export default function Home() {
  return (
    <div>
      <TopBg />
      <HeroPfp />
      <SocialLinks />
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
      <TechStack />
    </div>
  );
}