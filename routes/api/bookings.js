const express = require('express');
const router = express.Router();
const bookingsCtrl = require('../../controllers/api/bookings');

// GET /api/bookings/
router.put('/retreat/retreat:id', bookingsCtrl.reserve);
// POST /api/bookings/
router.post('/new', bookingsCtrl.createBooking);

router.post('/:id', bookingsCtrl.bookRetreat)

router.get('/', bookingsCtrl.index)

module.exports = router;
