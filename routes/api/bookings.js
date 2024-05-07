const express = require('express');
const router = express.Router();
const bookingsCtrl = require('../../controllers/api/bookings');

// GET /api/bookings/
router.put('/retreat/retreat:id', bookingsCtrl.reserve)
// POST /api/bookings/
router.post('/new', bookingsCtrl.createBooking)

router.post('/:id', bookingsCtrl.bookRetreat)

router.get('/', bookingsCtrl.index)


// GET /api/bookings/cart
router.get('/cart', bookingsCtrl.cart) 

// POST /api/bookings/cart/retreat/:id
router.post('/cart/retreats/:id', bookingsCtrl.addToCart)

// POST /api/bookings/cart/checkout
router.post('/cart/checkout', bookingsCtrl.checkout)



module.exports = router;
