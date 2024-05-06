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
    console.log(catalogs)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


async function showRetreatsInCatalog(req, res) {
  console.log(req.params.catalogId)
  try {
    const catalog = await Catalog.findById({})
    const retreatsInCatalog = await Retreat.find({
      '_.id': {$in: catalog.retreats}
    })
    res.json(retreatsInCatalog)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
