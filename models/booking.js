
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const bookingSchema = new Schema({
  qty: { type: Number, default: 1 },
  retreat: retreatSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

bookingSchema.virtual('extPrice').get(function() {
  return this.qty * this.retreatItem.price;
});

// Define the Retreat schema
const retreatSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bookings: [bookingSchema],
  isPaid: { type: Boolean, default: false } 
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

bookingSchema.virtual('bookingTotal').get(function() {
  return this.bookings.reduce((total, booking) => total + booking.extPrice, 0);
});

bookingSchema.virtual('bookingQty').get(function() {
  return this.bookings.reduce((total, booking) => total + booking.qty, 0);
});

retreatSchema.virtual('retreatId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

bookingSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};


  // Instance method for booking a retreat
bookingSchema.methods.bookRetreat = async function () {
  // 'this' keyword is bound to the booking document
  const booking = this;
  // Get the retreat from the "catalog"
  const Retreat = mongoose.model('Retreat');
  const retreat = await Retreat.findById(booking.retreat);
  // Decrease the available spots
  retreat.availableSpots -= 1;
  // Save the updated retreat
  await retreat.save();
  // return the save() method's promise for the booking
  return booking.save();
};

module.exports = mongoose.model('Booking', bookingSchema);
