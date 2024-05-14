const express = require('express');
const router = express.Router();
const authorController = require('../controller/author.controller');

// Routes for books
router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.post('/', authorController.createAuthor);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;
