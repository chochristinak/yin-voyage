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
    // console.log(catalogs)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


async function showRetreatsInCatalog(req, res) {
  try {
    const catalog = await Catalog.findById(req.params.id).populate('retreats')
    const retreatsInCatalog = await Retreat.find({
      '_id': {$in: catalog.retreats}
      
    })
    console.log(retreatsInCatalog)
    res.json(retreatsInCatalog)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
