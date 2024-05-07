// import { useState, useEffect } from 'react';
// import * as retreatsAPI from '../../utilities/retreats-api'

// export default function RetreatBookings({ retreatId }) {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getBookings = async () => {
//       try {
//         const bookingsData = await getBookingDetails(retreatId);
//         setBookings(bookingsData);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     getBookings();
//   }, [retreatId]); 

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Bookings for Retreat</h2>
//       <ul>
//         {bookings.map(booking => (
//           <li key={booking.id}>
//             {/* Render booking details */}
//             {/* Example: <span>{booking.name}</span> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// ;

