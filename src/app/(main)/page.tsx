"use client";

import dynamic from "next/dynamic"
import HeroSection from "@/features/uicomponents/Heropfp";
import SocialLinks from "@/features/uicomponents/Sociallinks";
import IntroAbout from "@/features/uicomponents/IntroAbout";
import ConnectButtons from "@/features/uicomponents/ConnectButtons";
import { TechStack } from "@/features/uicomponents/Techstack";
import ProjectShow from "@/features/components/Projects/ProjectShow";
import SectionBorder from "@/components/layout/seprators";
import BlogShow from "@/features/components/(Blogs)/Blogs";
import Footer from "@/features/uicomponents/Footer";
import DiagonalPattern from "@/features/components/LRBorder/lrborder";
import { ExperienceSection } from "@/features/uicomponents/Experence";
import {PersonalStuff } from "@/features/uicomponents/Personalstuff";
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
        <TechStack />
        <ProjectShow />
        <SectionBorder className="mt-6" />
        <ExperienceSection />
        <GithubActivity />
        <SectionBorder className="mt-6" />
        <PersonalStuff />
        <SectionBorder className="mt-6" />
        <BlogShow />
        <Footer />
      </main>
    </div>
  );
}