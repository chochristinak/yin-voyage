const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  }
}, {
  timestamps: true
});

reviewSchema.statics.getAllReviewsWithUserName = function() {
  return this.find()
    .populate('user', 'name')
    .exec();
};

reviewSchema.virtual('userName', {
  ref: 'User', 
  localField: 'user', 
  foreignField: '_id', 
  justOne: true 
});

module.exports = mongoose.model('Review', reviewSchema);