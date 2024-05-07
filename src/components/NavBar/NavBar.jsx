
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css'; 
import * as userService from "../../utilities/users-service";

import HamburgerMenu from "../Hamburger/Hamburger";

export default function NavBar({ user, setUser }) {
  const [showNav, setShowNav] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/catalogs">Yin Voyage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShowNav(!showNav)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/catalogs">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/retreats">All Retreats</Nav.Link>
              <Nav.Link as={Link} to="/bookings">Booking History</Nav.Link>
              <Nav.Link as={Link} to="/:userId/wishlist">Wishlist</Nav.Link>
              <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
            </Nav>
            <div className="welcome-message">Welcome, {user.name}</div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Burger Menu */}
      <HamburgerMenu isOpen={showNav} onClose={() => setShowNav(false)}>
        <Link to="/catalogs" onClick={() => setShowNav(false)}>Home</Link>
        <Link to="/about" onClick={() => setShowNav(false)}>About</Link>
        <Link to="/retreats" onClick={() => setShowNav(false)}>All Retreats</Link>
        <Link to="/bookings" onClick={() => setShowNav(false)}>Booking History</Link>
        <Link to="/wishlist" onClick={() => setShowNav(false)}>Wishlist</Link>
        <Link onClick={() => { handleLogOut(); setShowNav(false); }}>Log Out</Link>
      </HamburgerMenu>
    </>
  );
}


