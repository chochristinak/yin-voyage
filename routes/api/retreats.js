const express = require('express')
const router = express.Router()
const retreatsCtrl = require('../../controllers/api/retreats')
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/retreats'
router.get('/', retreatsCtrl.showAll) 

router.get('/:id', retreatsCtrl.getById) 

router.get(':catalogName/', retreatsCtrl.getRetreatsByCatalog)

router.put('/:id/availability', retreatsCtrl.bookSpot)

// POST /retreats/:id/reviews (create new review for retreat)
router.post('/:id/reviews', ensureLoggedIn, retreatsCtrl.createReview)

// DELETE /reviews
router.delete('/:retreatId/reviews/:reviewId', ensureLoggedIn, retreatsCtrl.deleteReview)

router.get('/:retreatId/reviews/:reviewId', ensureLoggedIn, retreatsCtrl.showReview);

// edit review for a specific retreat
router.get('/:retreatId/reviews/:reviewId', ensureLoggedIn, retreatsCtrl.editReview)

// update review
router.put('/:retreatId/reviews/:reviewId', ensureLoggedIn, retreatsCtrl.updateReview)


router.post('/:id/wishlist', ensureLoggedIn, retreatsCtrl.addToWishList)




module.exports = router;

