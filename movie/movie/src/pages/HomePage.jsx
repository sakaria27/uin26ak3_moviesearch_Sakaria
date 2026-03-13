import { useEffect, useState } from "react";
import MovieList from '../componetes/MovieList'

const apikey = 'aef1a365'


function HomePage() {
    const [movieResults, setMovieResults] = useState([])
    const [searchText, setSearchText ] = useState([])
    const [laster, setLaster] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() =>{
        async function fetchMovies() {
            setLaster(true)

            const query = searchText.length >= 3 ? searchText : "James Bond"
            const response = await fetch(
                https://www.omdbapi.com?apikey=${apikey}=${apikey}&s=${query}&type=movie)
            
            const data = await response.json()

            if (data.Response === 'true'){
                if
            }

        }
    })

    return(
        <main>
            <header>
                <h1>Film søk</h1>
            </header>
            <section>
                <h2>søk</h2>
                <form>
                    <label htmlFor="search">Filmtittel</label>
                    <input type="search" id="search" />
                </form>
            </section>
        </main>
    )
    

  
}

export default HomePage
