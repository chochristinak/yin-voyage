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



module.exports = router;

