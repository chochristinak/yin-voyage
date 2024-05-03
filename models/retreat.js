const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const retreatSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    price: {
      type: Number,
    },
    availableSpots: {
      type: Number,
    },
    retreatType: {
      type: Schema.Types.ObjectId,
      ref: "Catalog",
    },
    bookings: [{
      type: Schema.Types.ObjectId,
      ref: 'Booking'
    }],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
  }
);

retreatSchema.methods.bookSpot = function () {
  if (this.availableSpots > 0) {
    this.availableSpots -= 1;
    return this.save();
  } else {
    throw new Error("No available spots left to book.");
  }
};

module.exports = mongoose.model("Retreat", retreatSchema);
