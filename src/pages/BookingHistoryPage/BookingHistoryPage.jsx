import { useState, useEffect } from "react";
import * as bookingsAPI from "../../utilities/bookings-api.js";
import BookingDetail from "../../components/BookingDetail/BookingDetail.jsx";
import "./BookingHistoryPage.css";

export default function BookingHistoryPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(function () {
    async function getBookings() {
      const bookings = await bookingsAPI.getAll();
      setBookings(bookings);
      console.log(bookings);
    }
    getBookings();
  }, []);

  return (
    <>
      <h1>BookingHistoryPage</h1>
      <div className="scrollbox">
        {bookings.map((booking) => (
          <div key={booking._id} className="Booking-card">
            <BookingDetail booking={booking} />
          </div>
        ))}
      </div>
    </>
  );
}
