const express = require("express");
const APP_SERVER = express();





const booksRouter = require('./routes/bookRoutes');
const authorRouter = require('./routes/authorRoutes');

APP_SERVER.use('/api/author', authorRouter);

APP_SERVER.use('/api/books', booksRouter);


module.exports = APP_SERVER;