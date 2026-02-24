"use client";

import dynamic from "next/dynamic"



import TopBg from "../../components/layout/topbg";
import HeroPfp from "@/features/uicomponents/heropfp";
import SocialLinks from "@/features/uicomponents/sociallinks";
import IntroAbout from "@/features/uicomponents/introAbout";
import ConnectButtons from "@/features/uicomponents/connectButtons";
import { TechStack } from "@/features/uicomponents/techstack";
import  ProjectShow  from "@/features/components/Projects/ProjectShow";



export default function Home() {


const GithubActivity = dynamic(
  () => import("../../features/uicomponents/github"),
  { ssr: false }
)
  return (
    <div>
      <TopBg />
      <HeroPfp />
      <IntroAbout /> 
       <SocialLinks />
      <ConnectButtons />
      <TechStack />  
       <ProjectShow />
      <GithubActivity/>
   
    </div>
  );
}