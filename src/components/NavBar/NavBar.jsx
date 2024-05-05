import { Link } from "react-router-dom";
import {useState} from 'react';
import { ReactBurgerMenu } from "react-burger-menu";
import * as userService from "../../utilities/users-service";
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
        <div className="hamburger" onClick={() => setShowNav(!showNav)}>☰</div>
        {showNav && (
          <nav className="navbar">
            <Link to="/catalogs">Home</Link>
            <Link to="/retreats">All Retreats</Link>
            <Link to="/">About</Link>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </nav>
        )}
      </header>
    </>
  );
}



//   return (
//     <>
//       <nav className ="header">
//         <Link to="/catalogs">Home</Link>
//         &nbsp; |<Link to="/retreats">All Retreats</Link>&nbsp; &nbsp; | &nbsp;
//         <Link to="/">About</Link>&nbsp; &nbsp; | &nbsp;
//         <span>Welcome, {user?.name}.</span>
//         &nbsp; | &nbsp;
//         <Link to="" onClick={handleLogOut}>
//           Log Out
//         </Link>
//         <br></br>
//       </nav>
      
//     </>
//   );
// }
