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
        name: "Guillermo Rauch",
        role: "CEO",
        company: "Vercel",
        description: "Awesome work. Loved the component architecture and that smooth slide-to-unlock interaction. Everything shipped polished and production ready.",
    }, 
    {
        id: 2,
        name: "Sarah Chen",
        role: "Product Designer",
        company: "Linear",
        description: "The UI quality is seriously impressive. The testimonial section now feels intentional, clean, and premium across desktop and mobile.",
    }
    , {
        id: 3,
        name: "Marcus Lee",
        role: "Engineering Lead",
        company: "Remote",
        description: "Fast turnaround, thoughtful implementation, and great attention to detail. The layout and spacing made the page instantly more trustworthy."
    }
]