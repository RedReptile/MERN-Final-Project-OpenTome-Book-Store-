import React from 'react';

const CardComponent = ({ data }) => {

  return (
    <div className="flex flex-wrap justify-around items-center my-8">
      {data.map((book, index) => (
        <div
          key={index}
          className="flex max-w-sm w-full rounded-lg overflow-hidden m-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        >
          <img
            className="w-1/4 h-40 object-cover"
            src={book.imgUrl}
            alt={book.title}
          />
          <div className="w-3/4 pl-6 pb-10 pt-2">
            <div className="flex flex-col justify-between h-full">
              <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
              <p className="text-gray-600 text-sm mt-2">By {book.author}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
                <span className="text-gray-600 ml-2">{book.rating}</span>
              </div>
              <p className="text-gray-600 mt-2 text-sm">
                {book.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      
    </div>
    
  );
};

export default CardComponent;
