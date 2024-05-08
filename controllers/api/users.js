const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const Retreat = require("../../models/retreat");

module.exports = {
  create,
  login, 
  checkToken,
  wishlist
};

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = res.json( createJWT(user) );
  } catch (err) {
    res.status(400).json({ message: 'Bad Credentials', error: err.message });
  }
}

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

// Helper functions
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}


async function wishlist(req, res) {
  try {
    const retreat = await Retreat.findById(req.params.id);
    const user = await User.findById(req.user._id);
    if (!user.wishlist) {
      user.wishlist = [];
    }
    if (!user.wishlist.includes(retreat._id)) {
      user.wishlist.push(retreat._id);
      await user.save();
    }
    res.json({
      message: 'Successfully added to wishlist.',
      wishlist: user.wishlist,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: 'An error occurred while adding to wishlist.',
      error: err,
    });
  }
}

