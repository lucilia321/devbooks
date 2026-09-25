const express = require('express');

const router = express.Router();

const { createAuthor } = require('../controllers/authorsController');

router.post('/authors', createAuthor);

module.exports = router;