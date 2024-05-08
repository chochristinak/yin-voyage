import React from "react";
import { Link } from "react-router-dom";

export default function BookingDetail({ booking }) {
  return (
    <div className="booking-card">
      <h3>Booking ID: {booking.bookingId}</h3>
      <p>Booking Date: {new Date(booking.createdAt).toLocaleDateString()}</p>
      {booking.retreatListItems.map((item, idx) => (
        <div key={idx}>
          <h4>{item.retreat.title}</h4>
          <p>Quantity: {item.qty}</p>
          <p>Price: {item.extPrice}</p>
          <p>
            Retreat Start Date:{" "}
            {new Date(item.retreat.startDate).toLocaleDateString()}
          </p>
          <p>
            Retreat End Date:{" "}
            {new Date(item.retreat.endDate).toLocaleDateString()}
          </p>

          <Link to={`/retreats/${item.retreat._id}`}>
            Revisit Retreat Details
          </Link>
        </div>
      ))}
    </div>
  );
}
