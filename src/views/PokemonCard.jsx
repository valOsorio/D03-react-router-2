import { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState()
  const { name } = useParams()

  const getPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const pokeInfo = await response.json()
      setPokemon({
        name: (pokeInfo.name),
        url: pokeInfo.sprites.other.home.front_default,
        hp: pokeInfo.stats[0].base_stat,
        attack: pokeInfo.stats[1].base_stat,
        defense: pokeInfo.stats[2].base_stat,
        specialAttack: pokeInfo.stats[3].base_stat,
        specialDefense: pokeInfo.stats[4].base_stat,
        speed: pokeInfo.stats[5].base_stat,
        type: (pokeInfo.types[0].type.name)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className='container pt-5'>
      <div className='row d-flex justify-content-center'>
        <Card style={{ width: '20rem' }}>
          <Card.Title className='fs-1 pt-3 text-center mb-0 text-capitalize'>{pokemon?.name}</Card.Title>
          <Card.Img variant='top' src={pokemon?.url} />
          <Card.Body>
            <Card.Title>Statistics</Card.Title>
            <ListGroup className='list-group list-group-flush p-0'>
              <ListGroup.Item className='p-1'>Hp : {pokemon?.hp}</ListGroup.Item>
              <ListGroup.Item className='p-1'>Attack : {pokemon?.attack}</ListGroup.Item>
              <ListGroup.Item className='p-1'>Defense : {pokemon?.defense}</ListGroup.Item>
              <ListGroup.Item className='p-1'>Special Attack : {pokemon?.specialAttack}</ListGroup.Item>
              <ListGroup.Item className='p-1'>Special Defense : {pokemon?.specialDefense}</ListGroup.Item>
              <ListGroup.Item className='p-1'>Speed : {pokemon?.speed}</ListGroup.Item>
              <ListGroup.Item className='p-1 mt-3 text-capitalize'><strong>Type : </strong>{pokemon?.type}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default PokemonCard
