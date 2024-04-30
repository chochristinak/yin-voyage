import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import SearchComponent from '../SearchComponent/SearchComponent.jsx'

export default function NavBar({ user, setUser }) {
  function handleLogOut(){
    userService.logOut();
    setUser(null)
  }
  return (
   <>
    <div>
      <SearchComponent />
    </div>
    <nav>
      <Link to="/catalog">Catalog</Link>
      &nbsp; | 
      <Link to="/">About</Link>&nbsp;
      &nbsp; | &nbsp;
      {/* <span>Welcome, {user.name}.</span> */}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>

   
    </>
    )
}