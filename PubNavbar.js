import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import React from 'react'

function PubNavbar() {
  return (
    <div>
      <Navbar bg="primary" text="white" expand="lg">
                <Navbar.Brand style={{ color: "white" }}>K&L Hospital</Navbar.Brand>
                <Navbar.Toggle />
                <Container>
                    
                    <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                    <Nav.Link className="text-red" href="/">Home</Nav.Link>
                        <Nav.Link className="text-blue" href="/about">About</Nav.Link>
                        <Nav.Link className="text-orange" href="/gallery">Gallery</Nav.Link>
                        <Nav.Link className="text-yellow" href="/contact">Contact Us</Nav.Link>
                        <Nav.Link className="text-pink" href="/regPatient">Patient Register</Nav.Link>
                    </Nav>
                        <Nav className="justify-content-end mr-20">
                            <NavDropdown title="Login" className="me-auto" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/patient/login">Patient Login</NavDropdown.Item>
                                <NavDropdown.Item href="/doctors/login">Doctor Login</NavDropdown.Item>
                                <NavDropdown.Item href="/administrator/login">Admin Login</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  )
}

export default PubNavbar
