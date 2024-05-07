import { Link } from "react-router-dom";
import {useState} from 'react';
import { ReactBurgerMenu } from "react-burger-menu";
import * as userService from "../../utilities/users-service";
import SearchComponent from "../SearchComponent/SearchComponent";
import './NavBar.css'


export default function NavBar({ user, setUser }) {
  const [showNav, setShowNav] = useState(false);
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <>
      <header className="header">
        <div className="logo">Yin Voyage</div>
        <div className="hamburger" onClick={() => setShowNav(!showNav)}>&#9776;</div>
        {showNav && (
          <nav className="navbar">
            <span className="welcome">Hi, {user.name}</span>
            <Link to="/catalogs">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/retreats">All Retreats</Link>
            <Link to="/bookings">Booking History</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </nav>
        )}
      </header>
    </>
  );
}

// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// export default function MyNavbar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">My Website</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#services">Services</Nav.Link>
//             {/* Add more menu items as needed */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

