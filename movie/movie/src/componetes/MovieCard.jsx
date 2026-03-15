import { Link } from 'react-router-dom'

function Moviecard ({movie}){
    const slug = movie.Title.toLowerCase().replaceAll(' ', '-')

    return(
        <li>
            <article>
                <Link to={`/${slug}`} state={{imdbID: movie.imdbID}}> 

                {movie.Poster !== 'N/A' && (
                    <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
                )}
                
                {movie.Poster === 'N/A' && <p>Ingen poster</p>}

                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                </Link>
            </article>
        </li>
    )
}

export default Moviecard