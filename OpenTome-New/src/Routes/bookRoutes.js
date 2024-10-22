const express = require('express');
const { addBook, updateBook, updateBookPartial, getAllBooks, getBookById, deleteBook } = require('../Controllers/bookControllers');
const auth = require('../Middleware/authMiddleware');
const authorizeRole = require('../Middleware/authorizeRoleMiddleware');
const { bookImage } = require('../Middleware/uploadMiddleware'); 
const router = express.Router();

// Add a new book
router.post('/', auth, authorizeRole('admin'), bookImage.single('coverImage'), addBook);

// Update a book
router.put('/update/:id', auth, authorizeRole('admin'), bookImage.single('coverImage'), updateBook);

// Partially update a book
router.patch('/update/:id', auth, authorizeRole('admin'), bookImage.single('coverImage'), updateBookPartial);

// Get all books
router.get('/', getAllBooks);

// Get a single book by ID
router.get('/:id', getBookById);

// Delete a book
router.delete('/:id', auth, authorizeRole('admin'), deleteBook);

module.exports = router;