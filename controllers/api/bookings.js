const Booking = require("../../models/booking");
const Retreat = require("../../models/retreat");

module.exports = {
  reserve,
  createBooking,
  bookRetreat,
  index,
};

async function index(req, res) {
  try {
    const bookings = await Booking.find({});
    console.log(bookings);
    return res.json(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createBooking(req, res) {
  const { retreatId } = req.body
  const booking = new Booking({
    user: req.user._id,
    retreatId,

  })
  await booking.save();
  res.json(booking);
}

async function reserve(req, res) {
  try {
    const { userId, retreatId } = req.body;
    const retreat = await Retreat.findById(retreatId);
    if (!retreat) {
      return res.status(404).json({ message: "Retreat not found" });
    }
    if (retreat.availableSpots <= 0) {
      return res
        .status(400)
        .json({ message: "No available spots left to book." });
    }
    const booking = new Booking({
      user: userId,
      retreat: retreatId,
    });
    await booking.save();
    retreat.availableSpots -= 1;
    await retreat.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function bookRetreat(req, res) {
  let bookings = [];
  try {
    const reatreat = await Retreat.findById(req.params.id);
    bookings.push(retreat);
    return res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
