const express = require('express');
const router = express.Router();
const catalogsCtrl = require('../../controllers/api/catalogs');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/catalogs'

router.get('/', catalogsCtrl.showAllCatalogs);

router.get('/catalog:id/retreats', catalogsCtrl.showRetreatsInCatalog)

module.exports = router;