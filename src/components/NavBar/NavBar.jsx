import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import SearchComponent from "../SearchComponent/SearchComponent";
import './NavBar.css'


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <>
      <nav className ="navbar">
        <Link to="/catalogs">Home</Link>
        &nbsp; |<Link to="/retreats">All Retreats</Link>&nbsp; &nbsp; | &nbsp;
        <Link to="/">About</Link>&nbsp; &nbsp; | &nbsp;
        <span>Welcome, {user?.name}.</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
        <br></br>
      </nav>
      <SearchComponent />
    </>
  );
}
