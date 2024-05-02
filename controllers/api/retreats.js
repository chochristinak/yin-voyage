const Retreat = require('../../models/retreat');
const Catalog = require('../../models/catalog');

module.exports = {
    getRetreatsByCatalog,
    getById,
    bookSpot, 
    showAll
    
  }
  async function showAll(req, res) {
    console.log('hello')
    try {
      const retreats = await Retreat.find({});
      console.log(retreats)
      res.json(retreats);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  
async function getRetreatsByCatalog(req, res) {
  const catalog = await Catalog.findOne({ name: catalogName });
  if (!catalog) {
    throw new Error(`Catalog with name ${catalogName} not found`);
  }
  const retreats = await Retreat.find({ catalog: catalog._id });
  res.json(retreats)
  // console.log(retreats)
}

async function getById(req, res) {
  try {
       const retreat = await Retreat.findById(req.params.id)
      if (retreat) {
          res.json(retreat);
      }
      return res.status(404).send('Sorry, no retreats match that id');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


async function bookSpot(req, res) {
  try {
    // Find the retreat
    const retreat = await Retreat.findById(req.params.id);
    
    // Check if there are available spots
    if (retreat.availableSpots > 0) {
      // Decrease the available spots
      retreat.availableSpots -= 1;
      
      // Save the updated retreat
      const updatedRetreat = await retreat.save();
      
      // Return the updated retreat as a JSON object
      res.json(updatedRetreat);
    } else {
      // Throw an error if there are no available spots
      throw new Error('No available spots left to book.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
