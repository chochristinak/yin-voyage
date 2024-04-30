const mongoose = require('mongoose');
// Ensure the Catalog model is processed by Mongoose (for populating retreat queries)
require('./catalog');
const retreatSchema = require('./retreatSchema');

module.exports = mongoose.model('Retreat', retreatSchema);