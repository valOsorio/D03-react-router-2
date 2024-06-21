import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const handleMenu = ({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
  return (
    <>
      <Navbar className='p-0' expand='lg' bg='dark' data-bs-theme='dark'>
        <Container>
          <NavLink className={handleMenu} to='/'>
            <Navbar.Brand>
              <img src='src/assets/img/logo.png' style={{ height: '5rem' }} />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink className={handleMenu} to='/'>Home</NavLink>
              <NavLink className={handleMenu} to='/pokemon'>Pokemones</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
