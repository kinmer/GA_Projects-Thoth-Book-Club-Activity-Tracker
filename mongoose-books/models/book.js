const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
        title: { type: String, required: true },
        author: { type: String, required: true },
        publisher: { type: String, required: true },
        publishYear: { type: Number, 
                        default: function() {
                        return new Date().getFullYear();
                        } 
        },
        ISBN: { type: String },
        customerRating: { 
            type: Number,
            enum:[1, 2, 3, 4, 5] 
         },
    } , {
        timestamps: true
    });

module.exports = mongoose.model('Book', bookSchema);


// const Book = require('./models/book')

// Book.create({
//     title: 'The Fire Next Time',
//         author: 'James Baldwin',
//         publisher: 'Modern Library',
//         publishYear: 2021,
//         ISBN: '978-0679601517',
//         customerRating: 4}).then(console.log)