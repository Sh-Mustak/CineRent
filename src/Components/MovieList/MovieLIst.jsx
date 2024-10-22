import { getAllMovies } from "../../Data/movies";
import MovieCard from "../MovieCard/MovieCard";


export default function MoiveList() {
  const movies = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {/* -- Begin Card -- */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {/* -- End Card -- */}
      </div>
    </div>
  );
}
