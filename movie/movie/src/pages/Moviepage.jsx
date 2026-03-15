import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const apikey ='aef1a365'

function Moviepage(){
    const location = useLocation()
    const imbdid = location.state?.imdbid

    const [movie, setMovie] = useState(null)
    const [laster, setLaster] = useState(true)

    useEffect(() =>{
        async function getMovie() {
            setLaster(true)

            const response = await fetch( 
                https://www.omdbapi.com?apikey=${apikey}&i=${imdbid})
            
            const data = await response.json()
            if (data.Response === 'true'){
                setMovies(data)    
            } else{
                setMovies(null)
            }
            setLaster(false)
        }
        if (imbdid) {
            getMovie()
        }
    },[imbdid])

    return(
        <main>
            <nav><Link to='/'>Tilbake</Link>
            </nav>
             {laster && <p>Laster film...</p>}
             {laster & movie && 
             (<article>
                <header>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Year}</p>
                </header>

                {movie.Poster !== 'N/A' && (<img src={movie.Poster} alt={`Poster for ${movie.Title}`} />)}
                <section>
                    <h2>Om Filmen</h2>
                    <p>{movie.Plot}</p>
                </section>
             </article>)}

             {!laster && !movie && <p>Fant ikke filmen</p>}

        </main>
    )
}

export default Moviepage
