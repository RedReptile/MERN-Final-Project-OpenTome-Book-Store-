import React from 'react';

// Utility function to chunk an array into groups of size n
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const BookRowComponent = ({ books, onBookSelect }) => {
  // Chunk books into rows of 4 (for large screens)
  const rows = chunkArray(books, 4);

  return (
    <div className="w-full">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center py-4 flex-wrap md:flex-nowrap">
          {row.map((book, bookIndex) => (
            <div
              key={bookIndex}
              className="flex-none w-full sm:w-1/2 md:w-64 p-2 mb-4"
              onClick={() => onBookSelect(book)}
            >
              <div className="bg-transparent rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col h-full">
                <img
                  className="w-full h-40 object-cover"
                  src={`http://localhost:5000/uploads/books/${book.coverImage}`}
                  alt={book.title}
                />

                <div className="p-4 flex-grow flex flex-col">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">{book.title}</h2>
                  <p className="text-gray-600 text-sm">By {book.author}</p>
                  <div className="flex items-center mt-2 mb-2">
                    <span className="text-yellow-500 text-lg">★★★★☆</span>
                    <span className="text-gray-600 ml-2">{book.rating}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {book.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BookRowComponent;
