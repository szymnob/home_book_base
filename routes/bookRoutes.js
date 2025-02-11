const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', (req, res) => bookController.getAllBooks(req, res));
router.get('/add', (req, res) => bookController.getAddBookForm(req, res));
router.post('/add', (req, res) => bookController.addBook(req, res));
router.get('/edit/:id', (req, res) => bookController.getEditBookForm(req, res));
router.post('/edit/:id', (req, res) => bookController.editBook(req, res));
router.post('/delete/:id', (req, res) => bookController.deleteBook(req, res));

module.exports = router;
