import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import { Home, NotFound, Pokemones, PokemonCard } from './views'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<Pokemones />} />
        <Route path='/pokemon/:name' element={<PokemonCard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
