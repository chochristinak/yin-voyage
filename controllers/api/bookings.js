const Booking = require('../../models/booking');
const Retreat = require('../../models/retreat');


module.exports = {
    cart,
    addToCart,
    setRetreatQtyInCart,
    checkout,
  };
  
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
  
  // Update the cart's isPaid property to true
  async function checkout(req, res) {
    const cart = await Booking.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
  }
  


