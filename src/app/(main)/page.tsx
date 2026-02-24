"use client";

import dynamic from "next/dynamic"



import TopBg from "../../components/layout/topbg";
import HeroSection from "@/features/uicomponents/heropfp";
import SocialLinks from "@/features/uicomponents/sociallinks";
import IntroAbout from "@/features/uicomponents/introAbout";
import ConnectButtons from "@/features/uicomponents/connectButtons";
import { TechStack } from "@/features/uicomponents/techstack";
import ProjectShow from "@/features/components/Projects/ProjectShow";
import SectionBorder from "@/components/layout/seprators";
import {cn} from "@/lib/utils";


export default function Home() {


  const GithubActivity = dynamic(
    () => import("../../features/uicomponents/github"),
    { ssr: false }
  )
  return (
    <div>
      <HeroSection />
      <SectionBorder className="mt-6" />
      <IntroAbout />
      <SocialLinks />
      <SectionBorder className="mt-6" />
      <ConnectButtons />
      <TechStack /> 
      <ProjectShow /> <SectionBorder className="mt-6" />
      <GithubActivity />

    </div>
  );
}
