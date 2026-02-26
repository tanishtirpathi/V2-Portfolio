import Image from "next/image"
import { Movie } from "./MoviesData"

type MovieCardProps = {
    movie: Movie
    className?: string
}

export const MovieCard = ({ movie, className }: MovieCardProps) => {
    return (
        <div
            className={`group bg-white dark:bg-zinc-900 
      border border-zinc-200 dark:border-zinc-800
      rounded-xl overflow-hidden shadow-sm
      transition-all duration-300 hover:shadow-xl hover:-translate-y-1
      ${className}`}
        >
            {/* Poster */}
            <div className="relative  overflow-hidden">
                <Image
                    src={movie.posterUrl || "/placeholder.jpg"}
                    alt={movie.title}
                    width={400}
                    height={500}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md 
          text-white text-sm font-semibold px-2 py-1 rounded-md">
                    ⭐ {movie.rating.toFixed(1)}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
                <h2 className="text-base font-main font-bold text-zinc-900 dark:text-white line-clamp-1">
                    {movie.title}
                </h2>

                <p className="text-sm font-sans text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {movie.description}
                </p>
            </div>
        </div>
    )
}