"use client";
import TopBg from "../../components/layout/topbg";
import HeroPfp from "@/features/uicomponents/heropfp";
import SocialLinks from "@/features/uicomponents/sociallinks";
import IntroAbout from "@/features/uicomponents/introAbout";
import ConnectButtons from "@/features/uicomponents/connectButtons";
import { TechStack } from "@/features/uicomponents/techstack";
import GithubActivity from "@/features/uicomponents/github";
export default function Home() {
  return (
    <div>
      <TopBg />
      <HeroPfp />
      <IntroAbout /> 
       <SocialLinks />
      <ConnectButtons />
      <TechStack />
      <GithubActivity/>
    </div>
  );
}