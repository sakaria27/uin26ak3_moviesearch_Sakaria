import MovieCard from './MovieCard'
import Moviecard from './MovieCard'

function MovieList({movies = [] }) {
    return(
        <ul>
            {movies.map(movie => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </ul>
    )
}

export default MovieList