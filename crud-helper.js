// Connect to the database
require('dotenv').config();
require('./config/database');

// // Require the Mongoose models
const User = require('./models/user');
const Retreat = require('./models/retreat');
const Catalog = require('./models/catalog');
const Booking = require('./models/booking');

// // // Local variables will come in handy for holding retrieved documents
let user, retreat, catalog, booking;
let users, retreats, catalogs, bookings;
