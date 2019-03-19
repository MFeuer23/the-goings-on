import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

const NavBar = props => {

  return(
    <Navbar bg="danger" variant="light" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>||
          <Link to="/about">About</Link>||
          <Link to="/favorites">Favorites</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default NavBar;
