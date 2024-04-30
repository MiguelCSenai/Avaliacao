import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand href="/">Miguel Caires</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
            <Nav.Link href="/Sobre-nos">Sobre nós</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;