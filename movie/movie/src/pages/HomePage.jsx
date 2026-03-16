import { useEffect, useState } from "react";
import MovieList from '../componetes/MovieList'
//api nøkel til omdb
const apikey = 'aef1a365'


function HomePage() {
    const [movies, setMovies] = useState([])
    const [searchText, setSearchText ] = useState("")
    const [laster, setLaster] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    
    //kjører når searchtext endres
    useEffect(() =>{
        async function fetchMovies() {
            setLaster(true)
            //vis søket er kortere en tre bokstaver brukte det standard søk
            const query = searchText.length >= 3 ? searchText : "James Bond"
            const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${query}&type=movie`)
            
            const data = await response.json()

            if (data.Response === 'True'){
                if (searchText.length >= 3 ){
                    setMovies(data.Search)
                } else {
                    //viser bare 10 første filmene
                    setMovies(data.Search.slice(0, 10))
                }
            } else{
                setMovies([])
            }
             setLaster (false)
        }

        if (searchText.length === 0 || searchText.length >= 3){
            fetchMovies()
        }
    }, [searchText])

    return(
        <main>
            <header>
                <h1>Film søk</h1>
            </header>
            <section>
                <h2>søk</h2>
                <form>
                    <label htmlFor="search">Filmtittel</label>
                    {/*oppdater searchtext når brukeren skriver*/}
                    <input type="search" id="search" value={searchText} 
                    onChange={(event) => setSearchText(event.target.value)} />
                </form>
            </section>

            <section>
                <h2>Filmer</h2>
                 {/* viser loading eller filmlisten */}
                {laster ? (<p>Laster filmer...</p>) :(<MovieList movies={movies} />)}
            </section>
        </main>
    )
     
}




export default HomePage
