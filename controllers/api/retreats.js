const Retreat = require('../../models/retreat');
const Catalog = require('../../models/catalog');

module.exports = {
    getRetreatsByCatalog,
    getAllRetreats,
    getRetreatById,
    
  }
  
async function getRetreatsByCatalog(req, res) {
  const catalog = await Catalog.findOne({ name: catalogName });
  if (!catalog) {
    throw new Error(`Catalog with name ${catalogName} not found`);
  }
  const retreats = await Retreat.find({ catalog: catalog._id });
  res.json(retreats)
  console.log(retreats)
}

async function getAllRetreats (req, res){
  try {
    const retreats = await Retreat.find()
    return res.status(200).json({ retreats })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

async function getRetreatById (req, res) {
  try {
      const { id } = req.params;
      const retreat = await Retreat.findById(id)
      if (dino) {
          return res.status(200).json({ retreat });
      }
      return res.status(404).send('Sorry, no retreats match that id');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}