
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const retreatListItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  retreat: {
    type: Schema.Types.ObjectId,
    ref: "Retreat",
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

retreatListItemSchema.virtual('extPrice').get(function() {
  return this.qty * this.retreat.price;
});

// Define the Booking schema
const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  retreat: {
    type: Schema.Types.ObjectId,
    ref: 'Retreat',
  },
  retreatListItems: [retreatListItemSchema],
  isPaid: { type: Boolean, default: false } 
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

bookingSchema.virtual('bookingTotal').get(function() {
  return this.retreatListItems.reduce((total, retreat) => total + retreat.extPrice, 0);
});

bookingSchema.virtual('bookingQty').get(function() {
  return this.retreatListItems.reduce((total, retreat) => total + retreat.qty, 0);
});

bookingSchema.virtual('bookingId').get(function() {
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
  bookingSchema.methods.addRetreatToCart = async function (retreatId) {
  // 'this' keyword is bound to the booking document
  const cart = this;
  // Get the retreat from the "catalog"
  const retreatListItems = cart.retreatListItems.find(retreatListItem => retreatListItem.retreat._id.equals(retreatId));
  if (retreatListItems) {
    // It already exists, so increase the qty
    retreatListItems.qty += 1;
  } else {
    // Get the item from the "catalog"
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
    const Retreat = mongoose.model('Retreat');
    const retreat = await Retreat.findById(retreatId);
    // The qty of the new lineItem object being pushed in defaults to 1
    cart.retreatListItem.push({ retreat });
  }
  // return the save() method's promise
  return cart.save();
};

// Instance method to set an item's qty in the cart
bookingSchema.methods.setRetreatQty = function(retreatId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const retreatListItem = cart.retreatListItems.find(retreatListItem => retreatListItem.retreat._id.equals(retreatId));
  if (retreatListItem && newQty <= 0) {
    // Calling deleteOne, removes the lineItem subdoc from the cart.lineItems array
    retreatListItem.deleteOne();
  } else if (retreatListItem) {
    // Set the new qty - positive value is assured thanks to prev if
    retreatListItem.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

bookingSchema.methods.updateAvailableSpots = async function() {
  // 'this' keyword is bound to the booking document
  const booking = this;

  // Loop through each retreat in the booking
  for (let retreatListItem of booking.retreatListItems) {
    // Get the retreat from the "catalog"
    const Retreat = mongoose.model('Retreat');
    const retreat = await Retreat.findById(retreatListItem.retreat._id);

    // Decrease the available spots by the quantity booked
    retreat.availableSpots -= retreatListItem.qty;

    // Save the updated retreat
    await retreat.save();
  }
  return booking.save();
};

module.exports = mongoose.model('Booking', bookingSchema);
