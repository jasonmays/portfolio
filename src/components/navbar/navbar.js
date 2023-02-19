import * as React from "react"
import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../images/logo.svg';
import './navbar.scss';

const OffcanvasExample = ({ pageInfo }) => {
  return (
    <Navbar key='lg' bg="white" expand='lg' className="mb-3 mt-3" variant="light">
      <Link to="/" className="menuLink">
        <Navbar.Brand as="span">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="JM Logo"
          />
        </Navbar.Brand>
      </Link>
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
          <Nav className="justify-content-end flex-grow-1 pe-3" activeKey={pageInfo && pageInfo.pageName}>
            <Link className="menuLink" to="/details" >
              <Nav.Link as="span" eventKey="details">
                Details
              </Nav.Link>
            </Link>
            <Link className="menuLink" to="/profile" >
              <Nav.Link as="span" eventKey="profile">Profile</Nav.Link>
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}

export default OffcanvasExample;