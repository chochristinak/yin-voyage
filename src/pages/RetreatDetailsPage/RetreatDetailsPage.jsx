import { useState, useEffect, useRef } from "react";
import * as bookingsAPI from "../../utilities/bookings-api";
import * as retreatsAPI from "../../utilities/retreats-api";
import BookingDetail from "../../components/BookingDetail/BookingDetail";
import { useNavigate, useParams } from "react-router-dom";
import RetreatDetailCard from "../../components/RetreatsListItem/RetreatsListItem";

export default function RetreatDetailsPage({
  handleBookSpot,
  handleChangeQty,
}) {
  const [showRetreat, setShowRetreat] = useState(true);
  const [retreat, setRetreat] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(function () {
    async function getRetreatById() {
      const retreat = await retreatsAPI.getById(id);
      setRetreat(retreat);
    }
    getRetreatById();
  }, [id]);

  useEffect(function () {
    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await bookingsAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleInputChange = (event) => {
    setBookingInfo({
      ...bookingInfo,
      [event.target.name]: event.target.value,
    });
  };

  /*--- Event Handlers ---*/
  async function handleBookSpot(retreatId) {
    const updatedCart = await bookingsAPI.addRetreatToCart(retreatId);
    setCart(updatedCart);
  }

  async function handleRetreatQty(retreatId, newQty) {
    const updatedCart = await bookingsAPI.setRetreatQty(retreatId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await bookingsAPI.checkout();
    navigate("/bookings");
  }
  return (
    <>
      <div>
        <RetreatDetailCard retreat={retreat} />

        <h2>Book this Retreat</h2>
        <form onSubmit={handleBookSpot}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={handleInputChange} />
          </label>
          <label>
            Date:
            <input type="date" name="date" onChange={handleInputChange} />
          </label>
          <button type="submit">Book</button>
        </form>
      </div>

      <BookingDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </>
  );
}
