const express = require('express');
const router = express.Router();
const catalogsCtrl = require('../../controllers/api/catalogs');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/catalog:id/retreats', catalogsCtrl.showAllCatalogs);

module.exports = router;