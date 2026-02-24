
export interface Project {
  title: string;
  description: string;
  image: string;
  LiveLink: string;
  GithubLink: string;
  status: string;
  location?: string;
}

export const ProjectDetail: Project[] = [
    {
        title: "Trend-Up",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/Project/Trend.png",
        LiveLink: "https://trendup.tanishtirpathi.me",
        GithubLink: "https://github.com/tanishtirpathi/Trend-Up-",
        status: "Completed",
        location:"/projects/trendUp"
    },
        {
        title: "LeetLab",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/Project/LeetCode.png",
        LiveLink: "https://lens.tanishtirpathi.me",
        GithubLink: "https://github.com/tanishtirpathi/LeetLab",
        status: "Building",
        location:"/projects/leetLab"
    },
        {
        title: "MindPin",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/Project/Mind.png",
        LiveLink: "https://example.com/project3",
        GithubLink  : "https://github.com/tanishtirpathi/MindPin",
        status: "Completed",
        location:"/projects/project3"
    },
        {
        title: "Trip Guard ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/Project/trip.png",
        LiveLink: "https://example.com/project4",
        GithubLink: "github.com/project4",
        status: "Completed",
        location:"/projects/project4"
    },{
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/PFP.png",
        LiveLink: "https://example.com/project5",
        GithubLink  : "github.com/project5",
        status: "Completed",
        location:"/projects/project5"
    },
        {
        title: "Project 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/PFP.png",
        LiveLink: "https://example.com/project6",
        GithubLink: "github.com/project6",
        status: "Completed",
        location:"/projects/project6"
    }
]