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
        title: "Iron Man ALL",
        description: "After building a powerful armored suit, genius billionaire Tony Stark fights global threats while confronting enemies born from his own technology.",
        posterUrl: "/images/Movies/IronMan.jpg",
        rating: 8.8,
    },
    {
        id: 2,
        title: "All of us are dead ",
        description: "A group of high school students struggle to survive after a sudden zombie outbreak traps them inside their school.",
        posterUrl: "/images/Movies/allOfUsAreDead.jpg",
        rating: 8.7,
    },
    {
        id: 3,
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        posterUrl: "/images/Movies/interstiller.jpg",
        rating: 8.6,
    },
    {
        id: 4,
        title: "Attack on Titan",
        description: "In a world where humanity hides behind giant walls, young soldiers battle massive Titans to protect what remains of mankind.",
        posterUrl: "/images/Movies/AOT.jpg",
        rating: 8.8,
    },
    {
        id: 5,
        title: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must face his greatest psychological challenge.",
        posterUrl: "/images/Movies/Batman.jpg",
        rating: 9.0,
    },
    {
        id: 6,
        title: "can this love be translated",
        description: "A multilingual interpreter becomes involved in a complicated romance where language barriers create emotional misunderstandings and unexpected bonds.",
        posterUrl: "/images/Movies/CanThisLoveBeTranslated.jpg",
        rating: 8.8,
    },
    {
        id: 7,
        title: "death note",
        description: "A brilliant student discovers a mysterious notebook that grants him the power to kill anyone whose name he writes in it.",
        posterUrl: "/images/Movies/DeathNote.jpg",
        rating: 8.7,
    },
    {
        id: 8,
        title: "Sweet Home",
        description: "After moving into a new apartment, a troubled teenager must fight terrifying monsters as humanity begins to turn into deadly creatures.",
        posterUrl: "/images/Movies/SweetHome.jpg",
        rating: 8.6,
    },
    {
        id: 9,
        title: "vincanzo",
        description: "A Korean-Italian mafia lawyer returns to Korea and uses ruthless strategies to take down a powerful and corrupt conglomerate.",
        posterUrl: "/images/Movies/Vincanzo.jpg",
        rating: 8.8,
    },
    {
        id: 10,
        title: "classRoom of the elite",
        description: "At an elite high school where students are ranked by merit, a quiet genius manipulates events from the shadows to survive the system.",
        posterUrl: "/images/Movies/ClassRoomOfTheElite.jpg",
        rating: 9.0,
    },
]