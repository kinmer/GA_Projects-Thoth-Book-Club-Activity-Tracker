const Book = require('../models/book');


const index = async(req, res) => {
    const books = await Book.find({});
    res.render('books/index', { title: 'All Books',books });
}


const show = async(req, res) => {
    const book = await Book.findById(req.params.id);
    res.render('books/show', { title: 'Book Detail', book })
}

const newBook = (req, res) => {
    res.render('books/new', { title: 'Add Book',errorMsg: '' });
}


const create = async(req, res) => {
    req.body.author = req.body.author.trim();
    if (req.body.author) req.body.author = req.body.author.split(/\s*,\s*/);
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
    show,
    index, 
    create
  };