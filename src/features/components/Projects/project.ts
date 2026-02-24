
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
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/PFP.png",
        LiveLink: "https://example.com/project1",
        GithubLink: "github.com/project1",
        status: "Completed",
        location:"/projects/project1"
    },
        {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/PFP.png",
        LiveLink: "https://example.com/project2",
        GithubLink: "github.com/project2",
        status: "Completed",
        location:"/projects/project2"
    },
        {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/PFP.png",
        LiveLink: "https://example.com/project3",
        GithubLink  : "github.com/project3",
        status: "Completed",
        location:"/projects/project3"
    },
        {
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/PFP.png",
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