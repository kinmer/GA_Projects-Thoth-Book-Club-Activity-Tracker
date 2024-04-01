const Book = require('../models/book');

const newBook = (req, res) => {
    res.render('books/new', {errorMsg: ''});
}

const index = async(req, res) => {
    const books = await Book.find({});
    res.render('books/index', { books });
}

const create = async(req, res) => {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Book.create(req.body);
        res.redirect('/books');  
    } catch (err) {
        console.log(err);
        res.render('books/new', { errorMsg: err.message });
    }
}



module.exports = {
    new: newBook, 
    index, 
    create
  };