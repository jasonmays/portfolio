import * as React from "react"
import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../images/logo.svg';
import './navbar.scss';

const MainMenu = ({ pageInfo }) => {
  return (
    <Navbar key='lg' bg="white" expand='lg' className="mb-3 mt-3" variant="light">
      <Link to="/" className="link">
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
        className="px-5 fullWidthSm"
      >
        <Offcanvas.Header className="mt-2" closeButton>
          <Link to="/" className="link">
            <Offcanvas.Title as="span" id={`offcanvasNavbarLabel-expand-lg`}>
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="JM Logo"
              />
            </Offcanvas.Title>
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3" activeKey={pageInfo && pageInfo.pageName}>
            <Link className="link" to="/details" >
              <Nav.Link as="span" eventKey="details">
                Details
              </Nav.Link>
            </Link>
            <Link className="link" to="/profile" >
              <Nav.Link as="span" eventKey="profile">Profile</Nav.Link>
            </Link>
            <Link className="link" to="/projects" >
              <Nav.Link as="span" eventKey="projects">Projects</Nav.Link>
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}

export default MainMenu;