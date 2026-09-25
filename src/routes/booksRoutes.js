const express = require('express');

const router = express.Router();

const {
  createBook,
  getBooks,
  updateBook,
  deleteBook
} = require('../controllers/booksController');

router.post('/books', createBook);
router.get('/books', getBooks);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;