import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const NavBarPenal = () => {
  const cartProducts = useSelector(state => state.cart)
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid className="navbar-fixed-top">
        <Navbar.Brand href="#">Example store</Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link to="/" as={Link}>Product</Nav.Link>
          </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <Nav.Link to='/cart' as={Link}>My cart {cartProducts.length}</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarPenal