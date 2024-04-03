const Member = require('../models/member');
const Book = require('../models/book');

const addToGroup = async(req, res) => {
    const book = await Book.findById(req.params.id);
    book.member.push(req.body.memeberId);
    await book.save();
    res.redirect(`/books/${book._id}`);
}

const newMember = async(req, res) => {
    const members = await Member.find({}).sort('name');
    res.render('members/new', {title: 'Add Member', members});
}

const create = async(req, res) => {
    req.body.born += 'T00:00';
    try {
        await Member.create(req.body);
    } catch(err) {
        console.log(err);
    }
    res.redirect('/members/new');
} 


module.exports = {
  new: newMember,
  create,
  addToGroup
};