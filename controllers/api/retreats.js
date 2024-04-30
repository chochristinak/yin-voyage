const Retreat = require('../../models/retreat');
const Catalog = require('../../models/catalog');

module.exports = {
    getRetreatsByCatalog,
  };
  
async function getRetreatsByCatalog(catalogName) {
  const catalog = await Catalog.findOne({ name: catalogName });
  if (!catalog) {
    throw new Error(`Catalog with name ${catalogName} not found`);
  }
  const retreats = await Retreat.find({ catalog: catalog._id });
  res.json(retreats)
  console.log(retreats)
}

