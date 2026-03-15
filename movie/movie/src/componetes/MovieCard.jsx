import { Link } from 'react-router-dom'

function Moviecard ({movie}){
    const slug = movie.Title.toLowercase().replaceAll('','-')

    return(
        <li>
            <article>
                <link to={`/${slug}`} state={{imdbid: movie.imbd}}> 

                {movie.Poster !== 'N/A' && (
                    <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
                )}
                
                {movie.Poster === 'N/A' && <p>Ingen poster</p>}

                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                </link>
            </article>
        </li>
    )
}

export default Moviecard