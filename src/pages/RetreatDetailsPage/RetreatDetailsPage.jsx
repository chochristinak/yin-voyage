import { useState, useEffect, useRef } from 'react';
import * as bookingsAPI from "../../utilities/bookings-api";
import * as retreatsAPI from "../../utilities/retreats-api";
import BookingDetail from "../../components/BookingDetail/BookingDetail";
import { useNavigate } from 'react-router-dom';
import RetreatsListItem from '../../components/RetreatsListItem/RetreatsListItem'


export default function RetreatDetailsPage({ handleBookSpot, handleChangeQty }) {
  const [retreatListItems, setRetreatListItems] = useState(true)
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

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

  useEffect(function () {
    async function getRetreats() {
      const retreats = await retreatsAPI.getAll();
      categoriesRef.current = [
        ...new Set(retreats.map((retreat) => retreat.catalog.name)),
      ];
      setRetreatListItems(retreats);
      setActiveCat(categoriesRef.current[0]);
    }
    getRetreats();

    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await bookingsAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

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
      <RetreatsListItem retreats={retreatListItems}/>

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
