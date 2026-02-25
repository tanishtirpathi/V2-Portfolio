
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
        description: "It is a Real time chat application with auto chat deletion feature and also It has currently 30+ user active ",
        image: "/images/Project/Trend.png",
        LiveLink: "https://trendup.tanishtirpathi.me",
        GithubLink: "https://github.com/tanishtirpathi/Trend-Up-",
        status: "Completed",
        location: "/projects/trendUp"
    },
    {
        title: "LeetLab",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/Project/LeetCode.png",
        LiveLink: "https://lens.tanishtirpathi.me",
        GithubLink: "https://github.com/tanishtirpathi/LeetLab",
        status: "Building",
        location: "/projects/leetLab"
    },
    {
        title: "MindPin",
        description: "Its also a Mind blowing desktop application which is just a kind sticky note type but it goes transparent when u are not using it. 200+ user actively using this ",
        image: "/images/Project/Mind.png",
        LiveLink: "https://mindpin.tanishtirpathi.me",
        GithubLink: "https://github.com/tanishtirpathi/MindPin",
        status: "Completed",
        location: "/projects/mindPin"
    },
    {
        title: "Trip Guard ",
        description: "It is a travel safety website for tourist and also It has complaint feature . This project is mainly made for SIH which make us win SIH 2025 Internal Hackathon",
        image: "/images/Project/trip.png",
        LiveLink: "https://example.com/project4",
        GithubLink: "https://github.com/tanishtirpathi/TripGuard",
        status: "Completed",
        location: "/projects/tripGuard"
    }, {
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/PFP.png",
        LiveLink: "https://example.com/project5",
        GithubLink: "https://github.com/tanishtirpathi/Project5",
        status: "Completed",
        location: "/projects/project5"
    },
    {
        title: "Project 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/PFP.png",
        LiveLink: "https://example.com/project6",
        GithubLink: "https://github.com/tanishtirpathi/Project6",
        status: "Completed",
        location: "/projects/project6"
    }
]