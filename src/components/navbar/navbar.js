import * as React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.scss';

function OffcanvasExample() {
  return (
    <>
      <Navbar key='lg' bg="primary" expand='lg' className="mb-3" variant="dark">
        <Container>
          <Navbar.Brand><Link className="menuBrand" to="/">Jason Mays</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Jason Mays
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link><Link className="menuLink" to="/details">Details</Link></Nav.Link>
                <Nav.Link><Link className="menuLink" to="/profile">Profile</Link></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;