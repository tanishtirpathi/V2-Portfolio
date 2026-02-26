
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
        LiveLink: "https://trend-up.vercel.app",
        GithubLink: "https://github.com/tanishtirpathi/Trend-up-",
        status: "Completed",
        location: "/projects/trendUp"
    },
    {
        title: "Leetlow",
        description: "Leetlow is a basicllay code exicution platform where u can practice 1000 of questoins [DSA] and sort by companies ",
        image: "/images/Project/LeetCode.png",
        LiveLink: "#",
        GithubLink: "https://github.com/tanishtirpathi/Leetlow",
        status: "Building",
        location: "/projects/leetlow"
    },
    {
        title: "MindPin",
        description: "Its also a Mind blowing desktop application which is just a kind sticky note type but it goes transparent when u are not using it. 200+ user actively using this ",
        image: "/images/Project/Mind.png",
        LiveLink: "https://mindpin.vercel.app",
        GithubLink: "https://github.com/tanishtirpathi/Mindpin",
        status: "Completed",
        location: "/projects/mindPin"
    },
    {
        title: "Trip Guard ",
        description: "It is a travel safety website for tourist and also It has complaint feature . This project is mainly made for SIH which make us win SIH 2025 Internal Hackathon",
        image: "/images/Project/trip.png",
        LiveLink: "https://trip-guard.vercel.app/",
        GithubLink: "https://github.com/tanishtirpathi/TripGuard",
        status: "Completed",
        location: "/projects/tripGuard"
    }

]