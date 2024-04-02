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

    } , {
        timestamps: true
    });

module.exports = mongoose.model('Book', bookSchema);

