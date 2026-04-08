export interface CurrentlyBuildingProps {
  buildingName: string;
  progress: number; 
  description: string;
  imageUrl?: string;
  code: string;
}

export const BuildingDetail: CurrentlyBuildingProps[] = [
    {
        buildingName: "AI-Interviewer",
        progress: 20,
        description: "An AI-powered interview platform that simulates real-world job interviews and provides instant feedback to help users improve their performance.",
        imageUrl: "/images/Building/AI-Interviewer.webp",
        code: "https://github.com/tanishtirpathi/GitRoast"
    }   
]
