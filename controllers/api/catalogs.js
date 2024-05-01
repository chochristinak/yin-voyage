const Retreat = require("../../models/retreat");
const Catalog = require("../../models/catalog");

module.exports = {
  showAllCatalogs,
  showRetreatsInCatalog,
};

async function showAllCatalogs(req, res) {
  try {
    const catalogs = await Catalog.find({});
    res.json(catalogs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function showRetreatsInCatalog(req, res) {
  try {
    const catalogId = req.params.catalogId;
    const retreats = await Retreat.find({ catalogId: catalogId });
    res.json(retreats);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
