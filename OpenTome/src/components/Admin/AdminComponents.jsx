import React, { useState, useEffect } from 'react';
import axios from '../../Config/axiosConfig';
import { toast } from 'react-hot-toast';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons

const AdminComponents = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    category: '',
    description: '',
    coverImage: null
  });
  const [editingBookId, setEditingBookId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4;

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setBook({ ...book, coverImage: e.target.files[0] });
  };

  const validateBook = () => {
    const { title, author, price, category, description } = book;
    if (!title || !author || !price || !category || !description) {
      toast.error('Please fill in all required fields');
      return false;
    }
    return true;
  };

  const handleAddBook = async () => {
    if (!validateBook()) return;

    const formData = new FormData();
    formData.append('title', book.title);
    formData.append('author', book.author);
    formData.append('price', book.price);
    formData.append('category', book.category);
    formData.append('description', book.description);
    if (book.coverImage) {
      formData.append('coverImage', book.coverImage);
    }

    try {
      const token = localStorage.getItem('token');
      await axios.post('/books', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}` 
        }
      });
      toast.success('Book added successfully');
      fetchBooks();
      setBook({
        title: '',
        author: '',
        price: '',
        category: '',
        description: '',
        coverImage: null
      });

      const fileInput = document.querySelector('input[name="coverImage"]');
      if (fileInput) {
        fileInput.value = '';
      }

    } catch (error) {
      toast.error('Failed to add book');
    }
  };

  const handleUpdateBook = async () => {
    if (!validateBook()) return;

    const formData = new FormData();
    formData.append('title', book.title);
    formData.append('author', book.author);
    formData.append('price', book.price);
    formData.append('category', book.category);
    formData.append('description', book.description);
    if (book.coverImage) {
      formData.append('coverImage', book.coverImage);
    }

    try {
      await axios.put(`/books/update/${editingBookId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Book updated successfully');
      fetchBooks();
      setBook({
        title: '',
        author: '',
        price: '',
        category: '',
        description: '',
        coverImage: null
      });
      setEditingBookId(null);
    } catch (error) {
      toast.error('Failed to update book');
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`/books/${id}`);
      toast.success('Book deleted successfully');
      fetchBooks();
    } catch (error) {
      toast.error('Failed to delete book');
    }
  };

  const handleEditBook = (book) => {
    setBook({
      title: book.title,
      author: book.author,
      price: book.price,
      category: book.category,
      description: book.description,
      coverImage: null
    });
    setEditingBookId(book._id);
  };

  // Pagination controls
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(books.length / booksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white p-10">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Form */}
        <div className="lg:w-1/2 w-full p-4 lg:p-8 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            {editingBookId ? 'Update Book' : 'Add Book'}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editingBookId ? handleUpdateBook() : handleAddBook();
            }}
          >
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <div className="w-full">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  type="text"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 mb-2">Author</label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  type="text"
                  name="author"
                  value={book.author}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <div className="w-full">
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  type="number"
                  name="price"
                  value={book.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 mb-2">Category</label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  type="text"
                  name="category"
                  value={book.category}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="description"
                value={book.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Cover Image</label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="file"
                name="coverImage"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700"
              >
                {editingBookId ? 'Update Book' : 'Add Book'}
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Book List */}
        <div className="lg:w-1/2 w-full p-8 bg-white overflow-y-auto">
          <ul className="space-y-4">
            {currentBooks.map((b) => (
              <li
                key={b._id}
                className="bg-white p-4 flex justify-between items-center"
              >
                <div>
                  <strong className="text-custom-lg font-medium leading-custom-lg font-inter text-gray-900">{b.title}</strong>
                  <span className="block text-sm text-gray-500">
                    {b.author}
                  </span>
                  <span className="block text-sm text-gray-500">
                    NPR. {b.price}
                  </span>
                </div>
                <div className="flex items-center">
                  <button
                    className="border border-gray-300 text-gray-700 py-1 px-4"
                    onClick={() => handleEditBook(b)}
                  >
                    Edit
                  </button>
                  <button
                    className="border border-gray-300 text-gray-700 py-1 px-4"
                    onClick={() => handleDeleteBook(b._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`text-gray-700 ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FaArrowLeft />
            </button>
            <span className="text-gray-700">{`Page ${currentPage} of ${Math.ceil(
              books.length / booksPerPage
            )}`}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(books.length / booksPerPage)}
              className={`text-gray-700 ${
                currentPage === Math.ceil(books.length / booksPerPage)
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComponents;
