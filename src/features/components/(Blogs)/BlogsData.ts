
export interface Blogs {
    title: string;
    time: string;
    location?: string;
    image?: string;
}

export const BlogsDetails: Blogs[] = [

    {
        title: "Why I love Tony stark , and how he influence me to be a better version of myself",
        time: "5 Min Read",
        location: "/blog/Stark",
        image: "/images/Blog/IRONMAN2.webp"
    },

    {
        title: "Making My own OpenClaw ",
        time: "4 Min Read",
        location: "/blog/OpenClaw",
        image: "/images/Blog/OPENCLAW.webp"
    },
    {
        title:"Who I am what make me ME",
        time:"13 Min Read",
        location:"/blog/WhoAmI",
        image: "/images/Blog/Iam3.webp"   
    },
    {
        title: "Learning from Raj shamani ",
        time: "15 Min Read",
        location: "/blog/RajShamani",
        image: "/images/Blog/Raj2.webp"
    },
    
    
    {
        title: "Why I love Japan and korea more than India ",
        time: "1 Min Read",
        location: "/blog/JapanKorea",
        image: "/images/Blog/Japan.webp"
    }
]