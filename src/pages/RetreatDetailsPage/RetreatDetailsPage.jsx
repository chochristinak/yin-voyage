import { useState, useEffect, useRef } from "react";
import * as bookingsAPI from "../../utilities/bookings-api";
import * as retreatsAPI from "../../utilities/retreats-api";
import { useNavigate, useParams } from "react-router-dom";
import RetreatDetailCard from "../../components/RetreatDetailCard/RetreatDetailCard";
import { Link } from "react-router-dom";
import './RetreatDetailsPage.css'
import Reviews from '../../components/Reviews/Reviews'

export default function RetreatDetailsPage() {
  const [retreat, setRetreat] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(
    function () {
      async function getRetreatById() {
        const retreat = await retreatsAPI.getById(id);
        setRetreat(retreat);
        console.log(retreat);
      }
      getRetreatById();
    },
    [id]
  );

  /*--- Event Handlers ---*/
  async function handleBookingConfirmation() {
    const bookingConfirmation = await bookingsAPI.addRetreat(retreat._id, retreat);
    setConfirmationMessage(
      `Booking confirmed for ${retreat.title}! 
       Total price: ${retreat.price}. 
       Start date: ${retreat.startDate.toLocaleString()}`)
  }
  return (
    <>
      <h2>Retreat Details</h2>
      <div className="retreat-details">
        <div className="retreat-info">
          <RetreatDetailCard retreat={retreat} />
          <button onClick={() => setIsModalOpen(true)}>
            Reserve Your Spot
          </button>
        </div>
        
      </div>
      {isModalOpen && (
        <div className="modal">
          <h2>Confirm Booking</h2>
          <p>Are you sure you want to book this retreat?</p>
          <button onClick={handleBookingConfirmation}>Confirm</button>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          {confirmationMessage && <p className="badge">{confirmationMessage}</p>}
          <div>
            <Link to="/bookings">Go to bookings</Link>
          </div>
        </div> 
      )}
      <Reviews />
    </>
  );
}