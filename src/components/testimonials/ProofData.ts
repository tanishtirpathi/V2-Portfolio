export interface Card {
    id: number;
    name: string;
    description: string;
    role?: string;
    company?: string;
    image?: string;
    Link?: string ;
}

export const CardDetails: Card[] = [

    {
        id: 1,
        name: "Neeraj ",
        role: "@Neerajscript",
        company: "X",
        image:"/images/Proof/Neeraj.webp",
        Link:"https://x.com/Neerajscript",
        description: "Awesome work. Loved the component architecture and that smooth slide-to-unlock interaction. Everything shipped polished and production ready.",
    }, 
    {
        id: 2,
        name: "@Hamsini",
        role: "content creator",
        company: "Instargram",
        image: "/images/Proof/Hamsini.webp",
        Link:"https://www.instagram.com/hamsinimanohar_/",
        description: "Heyyy, really appreciate the website you redesigned for me, maybe we should get on call?",
    }
    , {
        id: 3,
        name: "sunshine family ",
        role: "Cafe owner",
        company: "Cafe ",
        description: "Insane work sir consumer growth is increased by 4% . love to stay connected for other work "
    }
]