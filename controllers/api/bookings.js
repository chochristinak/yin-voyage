const Booking = require("../../models/booking");
const Retreat = require("../../models/retreat");

module.exports = {
  reserve,
  createBooking,
  bookRetreat,
  index,
  getBookingWithRetreatDetails,
  cart,
  addToCart,
  setRetreatQtyInCart,
  checkout
};

async function getBookingWithRetreatDetails(req, res) {
  try {
    const userBookings = await Booking.find({ user: req.user._id });
    return res.json(userBookings);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function index(req, res) {
  try {
    const bookings = await Booking.find({});
    console.log(bookings);
    return res.json(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createBooking(req, res) {
  const { retreatId } = req.body;
  const booking = new Booking({
    user: req.user._id,
    retreatId,
  });
  await booking.save();
  res.json(booking);
}

async function reserve(req, res) {
  try {
    const { userId, retreatId } = req.body;
    const retreat = await Retreat.findById(retreatId);
    if (!retreat) {
      return res.status(404).json({ message: "Retreat not found" });
    }
    if (retreat.availableSpots <= 0) {
      return res
        .status(400)
        .json({ message: "No available spots left to book." });
    }
    const booking = new Booking({
      user: userId,
      retreat: retreatId,
    });
    await booking.save();
    retreat.availableSpots -= 1;
    await retreat.save();
    res.status(201).json(booking, retreat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function bookRetreat(req, res) {
  let bookings = [];
  try {
    console.log(req.params.id);
    console.log(req.body);
    const retreat = await Retreat.findById(req.params.id);
    retreat.bookings.push(req.body.newBooking);
    retreat.save();
    return res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

///

async function checkout(req, res) {
  const cart = await Booking.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

// A cart is the booking for the user
async function cart(req, res) {
  const cart = await Booking.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Booking.getCart(req.user._id);
  await cart.addRetreatToCart(req.params.id);
  res.json(cart);
}

// Updates an item's qty in the cart
async function setRetreatQtyInCart(req, res) {
  const cart = await Booking.getCart(req.user._id);
  await cart.setRetreatQty(req.body.retreatId, req.body.newQty);
  res.json(cart);
}
