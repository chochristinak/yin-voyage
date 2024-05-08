import { useState, useEffect } from "react";
import * as bookingsAPI from "../../utilities/bookings-api";
import * as retreatsAPI from "../../utilities/retreats-api";
import { useNavigate, useParams } from "react-router-dom";
import RetreatDetailCard from "../../components/RetreatDetailCard/RetreatDetailCard";
import { Link } from "react-router-dom";
import "./RetreatDetailsPage.css";
import Reviews from "../../components/Reviews/Reviews";
import { Modal, Button } from "react-bootstrap";

export default function RetreatDetailsPage() {
  const [retreat, setRetreat] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    async function getRetreatById() {
      const retreat = await retreatsAPI.getById(id);
      setRetreat(retreat);
      console.log(retreat);
    }
    getRetreatById();
  }, [id]);

  useEffect(() => {
    async function getCart() {
      const cart = await bookingsAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleBookingConfirmation() {
    const bookingConfirmation = await bookingsAPI.addRetreat(
      retreat._id,
      retreat
    );
    setConfirmationMessage(
      <div>
        <p>Booking confirmed for {retreat.title}!</p>
        <p>Confirmation Number: {id}</p>
        <p>Total price: ${retreat.price} USD</p>
        <p>Start date: {new Date(retreat.startDate).toLocaleDateString()}</p>
      </div>
    );
  }

  return (
    <>
      <h2>Retreat Details</h2>
      <div className="retreat-details">
        <div className="retreat-info">
          <RetreatDetailCard retreat={retreat} />
          <Button onClick={() => setIsModalOpen(true)}>Reserve A Spot</Button>
        </div>
      </div>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to book this retreat?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleBookingConfirmation}>
            Confirm
          </Button>
        </Modal.Footer>
        {confirmationMessage && (
          <div className="badge">{confirmationMessage}</div>
        )}
        <div>
          <Link to="/bookings">Go to bookings</Link>
        </div>
      </Modal>
      <div className="reviews-scrollable">
        <Reviews retreat={retreat} />
      </div>
    </>
  );
}
