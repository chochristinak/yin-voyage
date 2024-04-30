const express = require('express');
const router = express.Router();
const retreatsCtrl = require('../../controllers/api/retreats');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/retreats/:catalogName', ensureLoggedIn, retreatsCtrl.getRetreatsByCatalog);

module.exports = router;

