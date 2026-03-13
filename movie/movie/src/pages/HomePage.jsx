import { useEffect, useState } from "react";
import MovieList from '../componetes/MovieList'

const apikey = 'aef1a365'
const defaultsearch = 'James Bond'

function HomePage() {
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
