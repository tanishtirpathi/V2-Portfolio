
export interface Blogs {
    title: string;
    time: string;
    location?: string;
}

export const BlogsDetails: Blogs[] = [

    {
        title: "Why I love Tony stark , and how he influence me to be a better version of myself",
        time: "5 Min Read",
        location: "/blog/Stark"
    },

    {
        title: "Making My own OpenClaw ",
        time: "4 Min Read",
        location: "/blog/OpenClaw"
    },
    {
        title:"Who I am what make me ME",
        time:"3 Min Read",
        location:"/blog/WhoAmI"
    },
    {
        title: "Learning from Raj shamani ",
        time: "15 Min Read",
        location: "/blog/RajShamani"
    },
    
    
    {
        title: "Why I love Japan and korea more than India ",
        time: "1 Min Read",
        location: "/blog/JapanKorea"
    }
]