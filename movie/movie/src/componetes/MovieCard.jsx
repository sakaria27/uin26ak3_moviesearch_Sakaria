import { Link } from 'react-router-dom'

function MovieCard ({ movie }){
    //lager URL versjon av filmtittelen 
    const slug = movie.Title.toLowerCase().replaceAll(' ', '-')

    return(
        <li>
            <article>
                 {/* Link til MoviePage og sender imdbID videre */}
                <Link to={`/${slug}`} state={{imdbID: movie.imdbID}}> 
                
                {/* viser poster hvis filmen har en */}
                {movie.Poster !== 'N/A' && (
                    <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
                )}
                
                {/* hvis det ikke finnes poster  */}
                {movie.Poster === 'N/A' && <p>Ingen poster</p>}

                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                </Link>
            </article>
        </li>
    )
}

export default MovieCard