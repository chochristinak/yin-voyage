const express = require('express');
const router = express.Router();
const retreatsCtrl = require('../../controllers/api/retreats');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/retreats'
router.get('/', retreatsCtrl.showAll);
router.get('/:id', retreatsCtrl.getById)
router.get(':catalogName/', retreatsCtrl.getRetreatsByCatalog)
router.put('/:id/availability', retreatsCtrl.bookSpot)


// POST /retreats/:id/reviews (create new review for retreat)
router.post('/:id/reviews', ensureLoggedIn, retreatsCtrl.createReview);

// edit review for a specific retreat
router.get('/:id/reviews/:id/edit', ensureLoggedIn, retreatsCtrl.editReview)

// update review
router.put('/:id/reviews/:id', ensureLoggedIn, retreatsCtrl.updateReview);

// DELETE /reviews
router.delete('/:id/reviews/:id', ensureLoggedIn, retreatsCtrl.deleteReview);



module.exports = router;

