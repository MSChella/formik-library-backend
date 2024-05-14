const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    ISBN: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: Date,
        required: true,
    },
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

// Export the Book model
module.exports = Book;
