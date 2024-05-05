const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catalogSchema = new Schema({
  name: { type: String},
  retreatType: { type: String},
  retreats: [{
    type: Schema.Types.ObjectId,
    ref: 'Retreat'
  }],
  posterPath: { type: String},
  sortOrder: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model('Catalog', catalogSchema);