export interface Movies {
    id: number;
    title: string;
    description: string;
    posterUrl: string;
    rating: number;
}

export const moviesData: Movies[] = [
    {
        id: 1,
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        posterUrl: "/images/pfp.jpg",
        rating: 8.8,
    },
    {
        id: 2,
        title: "The Matrix",
        description: "A computer hacker learns about the true nature of his reality.",
        posterUrl: "/images/pfp.jpg",
        rating: 8.7,
    },
    {
        id: 3,  
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        posterUrl: "/images/pfp.jpg",
        rating: 8.6,
    },
    {
        id: 4,
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        posterUrl: "/images/pfp.jpg",
        rating: 8.8,
    },
    {
        id: 5,
        title: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        posterUrl: "/images/pfp.jpg",
        rating: 9.0,
    },

]