const express = require('express')
const router = express.Router()
const retreatsCtrl = require('../../controllers/api/retreats')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.get('/', retreatsCtrl.showAll) 

router.get('/:id', retreatsCtrl.getById) 

router.get(':catalogName/', retreatsCtrl.getRetreatsByCatalog)

router.put('/:id/availability', retreatsCtrl.bookSpot)

router.get('/:retreatsId/bookings/:bookingId', retreatsCtrl.getById)

router.post('/:id/reviews', ensureLoggedIn, retreatsCtrl.createReview)

router.delete('/:retreatId/reviews/:reviewId', ensureLoggedIn, retreatsCtrl.deleteReview)

router.get('/:retreatId/reviews/:reviewId', ensureLoggedIn, retreatsCtrl.showReview);

router.get('/:retreatId/reviews/:reviewId', ensureLoggedIn, retreatsCtrl.editReview)

router.put('/:retreatId/reviews/:reviewId', ensureLoggedIn, retreatsCtrl.updateReview)


module.exports = router;

