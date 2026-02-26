"use client";

import dynamic from "next/dynamic"
import HeroSection from "@/features/uicomponents/heropfp";
import SocialLinks from "@/features/uicomponents/sociallinks";
import IntroAbout from "@/features/uicomponents/introAbout";
import ConnectButtons from "@/features/uicomponents/connectButtons";
import { TechStack } from "@/features/uicomponents/techstack";
import ProjectShow from "@/features/components/Projects/ProjectShow";
import SectionBorder from "@/components/layout/seprators";
import BlogShow from "@/features/components/(Blogs)/Blogs";
import Footer from "@/features/uicomponents/footer";
import DiagonalPattern from "@/features/components/LRBorder/lrborder";
import { ExperienceSection } from "@/features/uicomponents/Experence";
import {PersonalStuff } from "@/features/uicomponents/Personalstuff";
export default function Home() {
  const GithubActivity = dynamic(
    () => import("../../features/uicomponents/github"),
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