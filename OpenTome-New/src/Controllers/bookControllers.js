const Book = require('../Models/bookModel');

// Add a new book
const addBook = async (req, res) => {
    console.log('Add Book route hit');
    console.log('Request body:', req.body);
  
    try {
      const { title, author, price, category, description } = req.body;
      const coverImage = req.file ? req.file.path : undefined;
  
      if (!title || !author || !price || !category || !description || !coverImage) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const newBook = new Book({ title, author, price, category, description, coverImage });
      await newBook.save();
  
      res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to add book', error });
    }
  };
  

// Update a book
const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, price, description, category } = req.body;
    const coverImage = req.file ? req.file.path : undefined;
  
    try {
      const book = await Book.findByIdAndUpdate(id, { title, author, price, description, category, coverImage }, { new: true });
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.json(book);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Partially update a book
const updateBookPartial = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const image = req.file ? req.file.path : undefined;

  if (image) updates.image = image;

  try {
    const book = await Book.findByIdAndUpdate(id, updates, { new: true });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all books with sorting
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books from the database
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single book by ID
const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addBook, updateBook, updateBookPartial, getAllBooks, getBookById, deleteBook };
