"use client";

import dynamic from "next/dynamic"
import HeroSection from "@/features/uicomponents/Heropfp";
import SocialLinks from "@/features/uicomponents/Sociallinks";
import IntroAbout from "@/features/uicomponents/IntroAbout";
import ConnectButtons from "@/features/uicomponents/ConnectButtons";
import { TechStack } from "@/features/uicomponents/Techstack";
import ProjectShow from "@/features/components/Projects/ProjectShow";
import SectionBorder from "@/components/layout/Seprators";
import BlogShow from "@/features/components/(Blogs)/Blogs";
import ChessCard from "@/components/chesscard/ChessCard";
import Footer from "@/features/uicomponents/Footer";
import DiagonalPattern from "@/features/components/LRBorder/Lrborder";
import { ExperienceSection } from "@/features/uicomponents/Experence";
import { PersonalStuff } from "@/features/uicomponents/Personalstuff";
import BottomImage from "@/features/uicomponents/BottomImage";
import Message from "@/components/Message/Message";
import Proof from "@/components/testimonials/ProofCard";
export default function Home() {
  const GithubActivity = dynamic(
    () => import("../../features/uicomponents/Github"),
    { ssr: false }
  );

  return (
    <div className="relative w-full ">
      <main className="mx-auto relative w-full max-w-2xl px-4">
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />
        <HeroSection />
        <SectionBorder className="mt-6" />
        <IntroAbout />
        <SocialLinks />
        <SectionBorder className="mt-6" />
        <ConnectButtons />
        <SectionBorder className="mt-6" />
        <ExperienceSection />
        <ProjectShow />
        <Proof/>
        <SectionBorder className="mt-6" />
        <TechStack />
        <GithubActivity />
       <SectionBorder className="mt-6" />
        <Message />
        <SectionBorder className="mt-6" />
        <PersonalStuff />
        <SectionBorder className="mt-6" />
        <ChessCard/>
        <SectionBorder className="mt-6" />
        <BlogShow /> 
        <BottomImage/>
        <Footer />
     
      </main>
    </div>
  );
}