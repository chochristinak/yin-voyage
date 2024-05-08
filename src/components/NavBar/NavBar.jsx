// NavBar.jsx

import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
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
      <div className="navbar-border">
        <Navbar bg="light" expand="lg" className="navbar">
          <Container>
            <Navbar.Brand as={Link} to="/catalogs">
              <img
                src="https://i0.wp.com/totemsurftribe.files.wordpress.com/2024/05/screenshot-2024-05-07-at-8.05.35e280afpm.png?ssl=1"
                alt="Brand Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setShowNav(!showNav)}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/catalogs">
                  Home
                </Nav.Link>
                <span className="nav-separator"> | </span>
                <Nav.Link as={Link} to="/retreats">
                  All Retreats
                </Nav.Link>
                <span className="nav-separator"> | </span>
                <Nav.Link as={Link} to="/bookings">
                  Booking History
                </Nav.Link>
                <span className="nav-separator"> | </span>
                <Nav.Link as={Link} to="/wishlist">
                  Wishlist
                </Nav.Link>
                <span className="nav-separator"> | </span>
                <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
              </Nav>
              <Badge className="welcome-badge" variant="secondary">
              Welcome, {user.name.toUpperCase()}
              </Badge>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <HamburgerMenu isOpen={showNav} onClose={() => setShowNav(false)}>
        <Link to="/catalogs" onClick={() => setShowNav(false)}>
          Home
        </Link>
        <span className="nav-separator"> | </span>
        <Link to="/retreats" onClick={() => setShowNav(false)}>
          All Retreats
        </Link>
        <span className="nav-separator"> | </span>
        <Link to="/bookings" onClick={() => setShowNav(false)}>
          Booking History
        </Link>
        <span className="nav-separator"> | </span>
        <Link to="/wishlist" onClick={() => setShowNav(false)}>
          Wishlist
        </Link>
        <span className="nav-separator"> | </span>
        <Link
          onClick={() => {
            handleLogOut();
            setShowNav(false);
          }}
        >
          Log Out
        </Link>
      </HamburgerMenu>
    </>
  );
}
