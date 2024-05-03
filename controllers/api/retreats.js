const Retreat = require("../../models/retreat");
// const Catalog = require("../../models/catalog");
// const Review = require("../models/review");
// const Booking = require("../models/booking");

module.exports = {
  getRetreatsByCatalog,
  getById,
  bookSpot,
  showAll,
  createReview,
  deleteReview,
  editReview,
  updateReview,
};

async function showAll(req, res) {
  console.log("hello");
  try {
    const retreats = await Retreat.find({});
    console.log(retreats);
    res.json(retreats);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getRetreatsByCatalog(req, res) {
  const catalogId = req.params.id;
  const retreats = await Retreat.find({ retreatType: catalogId }).exec(); // Find all retreats with the given catalog ID
  if (!retreats) {
    throw new Error(`No retreats found for catalog with ID ${catalogId}`);
  }
  res.json(retreats);
}

async function getById(req, res) {
  try {
    const retreat = await Retreat.findById(req.params.id);
    if (retreat) {
      return res.json(retreat);
    }
    return res.status(404).send("Sorry, no retreats match that id");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function bookSpot(req, res) {
  try {
    const retreat = await Retreat.findById(req.params.id);
    if (retreat.availableSpots > 0) {
      retreat.availableSpots -= 1;
      const updatedRetreat = await retreat.save();
      res.json(updatedRetreat);
    } else {
      throw new Error("No available spots left to book.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

async function editReview(req, res) {
  try {
    const retreat = await Retreat.findOne({
      "review._id": req.params.id,
      "review.user": req.user._id,
    });
    const review = retreat.reviews.id(req.params.id);
    return res.json({ review });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateReview(req, res) {
  const retreat = await Retreat.findOne({
    "review._id": req.params.id,
    "review.user": req.user._id,
  });
  let reviewUpdate = retreat.reviews.id(req.params.id);
  if (reviewUpdate) {
    reviewUpdate.content = req.body.content;
  }
  try {
    await retreat.save();
  } catch (err) {
    console.log(err);
  }
  return res.json(retreat);
}

async function deleteReview(req, res) {
  const retreat = await Retreat.findOne({
    "review._id": req.params.id,
    "review.user": req.user._id,
  });
  if (!retreat) return res.redirect("/retreats");
  retreat.reviews.remove(req.params.id);
  await retreat.save();
  res.json(retreat);
}

async function createReview(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;

  const retreat = await Retreat.findById(req.params.id);

  req.body.user = req.user._id;
  req.body.userName = req.user.name;

  retreat.reviews.push(req.body);
  try {
    await retreat.save();
  } catch (err) {
    console.log(err);
  }
  res.json(retreat);
}
