const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 3
    }
  }, {
    timestamps: true
  });

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
        reviews: [reviewSchema],
        member: [{
            type: Schema.Types.ObjectId,
            ref: 'Member'
        }]

    } , {
        timestamps: true
    });





    

module.exports = mongoose.model('Book', bookSchema);

