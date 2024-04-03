const Book = require('../models/book');
const Member = require('../models/member')


const index = async(req, res) => {
    const books = await Book.find({});
    res.render('books/index', { title: 'All Books',books });
}


const show = async(req, res) => {
    const book = await Book.findById(req.params.id).populate('group').sort('name');

    const members = await Member.find({ _id: { $nin: book.group } });

    res.render('books/show', { title: 'Book Detail', book, members })
}

const newBook = (req, res) => {
    res.render('books/new', { title: 'Add Book',errorMsg: '' });
}


const create = async(req, res) => {
    req.body.author = req.body.author.trim();
  
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const book = await Book.create(req.body);
        
        res.redirect(`/books/${book._id}`); 
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