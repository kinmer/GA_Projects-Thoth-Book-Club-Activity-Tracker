const Book = require('../models/book');


const create = async(req, res) => {
    const book = await Book.findById(req.params.id);
    book.reviews.push(req.body);
    try {
        await book.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/books/${book._id}`);
}

module.exports = {
    create
  };