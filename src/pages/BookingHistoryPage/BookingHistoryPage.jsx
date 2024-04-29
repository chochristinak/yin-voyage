
import * as userService from '../../utilities/users-service.js';

export default function BookingHistoryPage() {
    const handleCheckToken = async () => {
    const expDate = await userService.checkToken()
    console.log(expDate)
  }
  return (
    <>
    <h1>BookingHistoryPage</h1>
    <button 
    onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}