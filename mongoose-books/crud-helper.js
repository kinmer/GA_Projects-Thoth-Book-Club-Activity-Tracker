require('dotenv').config();
require('./config/database');

// Require the app's Mongoose models
const Book = require('./models/book');
const Member = require('./models/member');
let books = await Movie.find({});
console.log(books);
