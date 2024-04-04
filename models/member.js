const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    born: Date, 
    profession: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Member', memberSchema);