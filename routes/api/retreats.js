const express = require('express');
const router = express.Router();
const retreatsCtrl = require('../../controllers/api/retreats');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/:catalogName', ensureLoggedIn, retreatsCtrl.getRetreatsByCatalog)
router.get ('/', ensureLoggedin, retreatsCtrl.getAllRetreats )
router.get('/retreat:id', retreatsCtrl.getRetreatById)
module.exports = router;

