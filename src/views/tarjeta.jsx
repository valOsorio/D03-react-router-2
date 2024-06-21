
import React from 'react'

const tarjeta = () => {
  return (
    <div className='container justify-content-center d-grid pt-5'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={pokemon?.url} />
      <Card.Body>
        <Card.Title>{pokemon?.name}</Card.Title>
        <Card.Title>Stats</Card.Title>
        <ul>
          <li>
            Hp : {pokemon?.hp}
          </li>
          <li>
            Ataque : {pokemon?.attack}
          </li>
          <li>
            Defensa : {pokemon?.defense}
          </li>
          <li>
            Ataque Especial : {pokemon?.specialAttack}
          </li>
          <li>
            Defensa Especial : {pokemon?.specialDefense}
          </li>
          <li>
            Velocidad : {pokemon?.speed}
          </li>
        </ul>
        <p><strong>Tipo : </strong>{pokemon?.type}</p>
        <button className='btn btn-primary' onClick={goToSearchPokemon}>Vuelve a buscar otro Pokemon!</button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default tarjeta