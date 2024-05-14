const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    biography: {
        type: String,
        required: true
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
