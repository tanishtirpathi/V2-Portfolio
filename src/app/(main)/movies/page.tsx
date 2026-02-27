import { moviesData } from "@/features/components/movies/MoviesData"
import { MovieCard } from "@/features/components/movies/movieCard"
import DiagonalPattern from "@/features/components/LRBorder/Lrborder" 

export default function Home() {
  return (
    
    <div className="max-w-3xl mx-auto py-20 relative">
           <DiagonalPattern side="left" />
              <DiagonalPattern side="right" />
    <div className="mb-12 text-center">
          <h2 className="text-4xl font-light font-serif italic">
        Movie Section
      </h2>

      <p className="text-neutral-400 mb-10">
        some movies are meant to flex
      </p>

    </div>
      {/* 2 per row */}
      <div className="grid grid-cols-2 gap-6 px-4 md:px-1 lg:px-0">
        {moviesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  
  )
}