import { useState, useEffect, useRef } from "react";
import * as bookingsAPI from "../../utilities/bookings-api";
import * as retreatsAPI from "../../utilities/retreats-api";
import * as reviewsAPI from "../../utilities/reviews-api";
import { useNavigate, useParams } from "react-router-dom";
import RetreatDetailCard from "../../components/RetreatDetailCard/RetreatDetailCard";
import { Link } from "react-router-dom";
import './RetreatDetailsPage.css'

export default function RetreatDetailsPage() {
  const [retreat, setRetreat] = useState([]);
  const [reviewText, setReviewText] = useState('');
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
  async function handleReviewSubmission(event) {
    event.preventDefault();
    const reviewData = {
      retreatId: retreat._id,
      text: reviewText,
    };
    const response = await reviewsAPI.create(reviewData);
    setReviewText('');
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
        <div className="reviews">
          <h3>Reviews</h3>
          {/* Display existing reviews here */}
          <form className="review-input" onSubmit={handleReviewSubmission}>
            <h4>Leave a Review</h4>
            <textarea 
              placeholder="Write your review here..."
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
            />
            <button type="submit">Submit Review</button>
          </form>
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
    </>
  );
}