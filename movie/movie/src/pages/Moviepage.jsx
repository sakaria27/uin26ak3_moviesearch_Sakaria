import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const apikey = 'aef1a365'

function MoviePage(){
    const location = useLocation()
    const imdbID = location.state?.imdbID

    const [movie, setMovie] = useState(null)
    const [laster, setLaster] = useState(true)

    useEffect(() => {
        async function getMovie() {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${imdbID}`)
            
            const data = await response.json()

            if (data.Response === 'True'){
                setMovie(data)
            }
            setLaster(false)
        }
        if (imdbID) {
            getMovie()
        }
    },[imdbID])

    return(
        <main>
            <nav>
                <Link to='/'>Tilbake</Link>
            </nav>

            {laster && <p>Laster film...</p>}

            {!laster && movie && (
                <article>
                    <header>
                        <h1>{movie.Title}</h1>
                        <p>{movie.Year}</p>
                    </header>
                    {movie.Poster !== 'N/A' &&(
                        <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
                    )}
                    <section>
                        <h2>Om filmen</h2>
                        <p>{movie.Plot}</p>
                    </section>
                    <section>
                        <h2>Detaljer</h2>
                        <p>Sjanger: {movie.Genre}</p>
                        <p>Regissør: {movie.Director}</p>
                        <p>Skuespillere: {movie.Actors}</p>
                        <p>IMDb rating: {movie.imdbRating}</p>
                    </section>
                </article>
            )}
        </main>
    )
}

export default MoviePage