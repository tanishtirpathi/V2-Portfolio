
export interface Project {
    title: string;
    description: string;
    image: string;
    LiveLink: string;
    GithubLink: string;
    status: string;
    tech: string[];
    location?: string;
}
export const ProjectDetail: Project[] = [
    {
        title: "Trend-Up",
        description: "It is a Real time chat application with auto chat deletion feature and also It has currently 30+ user active ",
        image: "/images/Project/Trendup.jpg",
        LiveLink: "https://trendup.tanishtirpathi.me",
        GithubLink: "https://github.com/tanishtirpathi/Trend-up-",
        status: "Completed",
        tech: ["react", "js", "nodejs", "mongodb", "tailwindcss", "shadcn-ui"],
        location: "/projects/Trendup"
    },
    {
        title: "Portfolio Website",
        description: "This is my personal portfolio website where I showcase my projects, experience, blogs, and tech stack with a modern, responsive design built using Next.js and TypeScript.",
        image: "/images/Project/Portfolio.jpg",
        LiveLink: "https://tanishtirpathi.me",
        tech: ["nextjs2", "typescript", "nodejs", "mongodb", "tailwindcss", "motion", "shadcn-ui"],
        GithubLink: "https://github.com/tanishtirpathi/v2-PortfolioS",
        status: "Completed",
        location: "/projects/Portfolio"
    },
    {
        title: "Playlitr",
        description: "Playlitr is a song-playing website where you can listen to music without ads or sign-up.",
        image: "/images/Project/Playlitr.jpg",
        LiveLink: "https://playlitr.tanishtirpathi.me",
        GithubLink: "https://github.com/tanishtirpathi/song-player/",
        tech: ["nextjs2", "typescript", "Base Ui", "js", "redis", "tailwindcss", "motion", "shadcn-ui"],
        status: "Completed",
        location: "/projects/Playlitr"
    }
    , {
        title: "Leetlow",
        description: "Leetlow is a basicllay code exicution platform where u can practice 1000 of questoins [DSA] and sort by companies ",
        image: "/images/Project/LeetLow.jpg",
        LiveLink: "#",
        GithubLink: "https://github.com/tanishtirpathi/Leetlow",
        tech: ["nextjs2", "typescript", "nodejs", "docker", "mysql", "tailwindcss"],
        status: "Building",
        location: "/projects/LeetLow"
    },

    {
        title: "MindPin",
        description: "Its also a Mind blowing desktop application which is just a kind sticky note type but it goes transparent when u are not using it. 200+ user actively using this ",
        image: "/images/Project/Mindpin.jpg",
        LiveLink: "https://mindpin.tanishtirpathi.me",
        tech: ["express", "js", "tailwindcss", "html"],
        GithubLink: "https://github.com/tanishtirpathi/Mindpin",
        status: "Completed",
        location: "/projects/Mindpin"
    }, 
    {
        title: "Trip Guard ",
        description: "It is a travel safety website for tourist and also It has complaint feature . This project is mainly made for SIH which make us win SIH 2025 Internal Hackathon",
        image: "/images/Project/TripGuard.jpg",
        LiveLink: "https://trip-guard.vercel.app/",
        tech: ["react", "js", "nodejs", "mongodb", "tailwindcss"],
        GithubLink: "https://github.com/tanishtirpathi/TripGuard",
        status: "Completed",
        location: "/projects/TripGuard"
    }


]


