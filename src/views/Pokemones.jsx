import { PokemonContext } from '../context/PokemonContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

const Pokemones = () => {
  const { pokemones, pokemonSelect, setPokemonSelect } = useContext(PokemonContext)
  const navigate = useNavigate()

  const getDetail = () => {
    navigate(`/pokemon/${pokemonSelect}`)
  }

  return (

    <div className='container d-flex justify-content-center'>
      <div className='row mt-5'>
        <div className='col-12'>
          <h2 className='p-3'>Selecciona un Pokemon</h2>
          <Form.Select
            className='form-select text-center text-capitalize'
            value={pokemonSelect}
            onChange={(e) => setPokemonSelect(e.target.value)}
          >
            <option value=''>--Seleccione--</option>
            {pokemones &&
        pokemones.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>--{pokemon.name} --</option>
        ))}
          </Form.Select>
          <div className='text-center'>
            <Button
              disabled={pokemonSelect === ''}
              onClick={getDetail}
              variant='dark'
              className='my-3'
            >Ver detalle
            </Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Pokemones
