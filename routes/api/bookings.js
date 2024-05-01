const express = require('express');
const router = express.Router();
const bookingsCtrl = require('../../controllers/api/bookings');

// GET /api/bookings/cart
router.get('/cart', bookingsCtrl.cart);
// POST /api/bookings/cart/retreat/:id
router.post('/cart/retreats/:id', bookingsCtrl.addToCart);
// POST /api/bookings/cart/checkout
router.post('/cart/checkout', bookingsCtrl.checkout);
// POST /api/bookings/cart/qty
router.put('/cart/qty', bookingsCtrl.setRetreatQtyInCart);

module.exports = router;