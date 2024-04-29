const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catalogSchema = new Schema({
  name: { type: String, required: true},
  retreatType: { type: String, required: true },
  sortOrder: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Catalog', catalogSchema);