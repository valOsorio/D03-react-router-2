import { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext()

const PokemonesProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState('')
  const [pokemonSelect, setPokemonSelect] = useState('')
  const getPokemones = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000')
    const response = await data.json()
    setPokemones(response.results)
  }

  useEffect(() => {
    getPokemones()
  }, [])

  return (

    <PokemonContext.Provider value={{ pokemones, setPokemones, pokemonSelect, setPokemonSelect }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonesProvider
