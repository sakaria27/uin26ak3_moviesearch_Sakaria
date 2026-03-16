import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage'
import Moviepage from './pages/MoviePage'
import './App.css'

function App() {

  return(
    <Routes>
      {/*viser forsiden når brukeren går til */}
      <Route path='/'element={<Homepage />} />
      {/* :movie er en dynasimsk route når du trykker på filmen basert på url */ }
      <Route path='/:movie' element={<Moviepage />} />
    </Routes>
  )
}

export default App
