const Author = require('../model/author.model');

// Controller methods
const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json(author);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createAuthor = async (req, res) => {
    try {
        const newAuthor = new Author(req.body);
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json(author);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json({ message: 'Author deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Export controller methods
module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor,
};
