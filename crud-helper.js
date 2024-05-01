// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Retreat = require('./models/retreatSchema');
const Catalog = require('./models/catalog');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
// let user, item, category, order;
// let users, items, categories, orders;
