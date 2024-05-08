const express = require('express');
const router = express.Router();
const catalogsCtrl = require('../../controllers/api/catalogs');

router.get('/', catalogsCtrl.showAllCatalogs);

router.get('/:catalogId/retreats', catalogsCtrl.showRetreatsInCatalog)

module.exports = router;