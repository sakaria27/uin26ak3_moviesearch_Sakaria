import MovieCard from './MovieCard'
import Moviecard from './MovieCard'

function MovieList({movies = [] }) {
    // går gjennom alle filmene og lager en moviecard for hver film
    return(
        <ul>
            {movies.map(movie => (
                // key brukes av react for å identifisere hvert element i listen
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </ul>
    )
}

export default MovieList