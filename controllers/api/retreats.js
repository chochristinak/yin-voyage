const Retreat = require("../../models/retreat");
const Review = require("../../models/review");
const User = require("../../models/user");
// const Booking = require("../models/booking");

module.exports = {
  getRetreatsByCatalog,
  getById,
  bookSpot,
  showAll,
  createReview,
  showReview,
  deleteReview,
  editReview,
  updateReview,
  addToWishList,
};

async function showAll(req, res) {
  try {
    const retreats = await Retreat.find({});
    res.json(retreats);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getRetreatsByCatalog(req, res) {
  const catalogId = req.params.id;
  const retreats = await Retreat.find({ retreatType: catalogId }).exec();
  if (!retreats) {
    throw new Error(`No retreats found for catalog with ID ${catalogId}`);
  }
  res.json(retreats);
}

async function getById(req, res) {
  try {
    const retreat = await Retreat.findById(req.params.id).populate("reviews").populate('bookings');    
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
    const review = await Review.findOne({
      _id: req.params.reviewId,
      user: req.user._id,
    });
    return res.json({ review });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateReview(req, res) {
  const reviewId = { _id: req.params.reviewId };
  console.log(req.body);
  const updated = {
    content: req.body.updatedReview.content,
    rating: req.body.updatedReview.rating,
  };
  try {
    const review = await Review.findOneAndUpdate(reviewId, updated);
    return res.json(review);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function deleteReview(req, res) {
  console.log(req.params.retreatId);
  console.log(req.params.reviewId);
  console.log(req.user._id);

  const retreat = await Retreat.findById(req.params.retreatId);
  const review = await Review.findOneAndDelete(req.params.reviewId);
  console.log(retreat);
  if (!retreat) return res.redirect("/retreats");
  console.log("deleting retreat");
  retreat.reviews.remove(req.params.reviewId);
  await retreat.save();
  res.json(retreat);
}

async function createReview(req, res) {
  // console.log(req.params);
  console.log(req.body);
  try {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.content = req.body.newReview.content;
    req.body.rating = req.body.newReview.rating;
    // console.log(req.body);
    // console.log("hello");
    const retreat = await Retreat.findById(req.params.id);
    const newReview = await Review.create(req.body);
    retreat.reviews.push(newReview._id);
    await retreat.save();
    return res.json(newReview);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function showReview(req, res) {
  console.log(req.body);
  console.log(req.params);

  try {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;

    const review = await Review.find({});

    res.json(review);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function addToWishList(req, res) {
  try {
    const retreat = await Retreat.findById(req.params.id);
    const user = await User.findById(req.user._id);

    if (!user.wishlist.includes(retreat._id)) {
      user.wishlist.push(retreat._id);
      await user.save();
    }

    res.json({
      message: "Successfully added to wishlist.",
      wishlist: user.wishlist,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "An error occurred while adding to wishlist.",
      error: err,
    });
  }
}
