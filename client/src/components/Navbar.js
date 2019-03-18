import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = props => {

  return(
    <Navbar bg="danger" variant="light" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/favorites">Favorites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default NavBar;
