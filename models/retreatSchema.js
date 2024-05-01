const Schema = require('mongoose').Schema;


const retreatSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    availableSpots: {
      type: Number,
      required: true
    },
    retreatType: {
      type: Schema.Types.ObjectId,
      ref: 'Catalog'
    },
    reviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }]
  }, {
    timestamps: true,
  });  
  
  module.exports = retreatSchema;
  
