import React from 'react';

const AboutComponent = () => {
  return (
    <div className="h-screen bg-white pt-20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-yellow-500 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/3 -translate-y-1/3 w-1/3 h-1/3 bg-purple-500 rounded-full opacity-50"></div>
        <div className="absolute top-2/3 left-2/3 transform -translate-x-2/3 -translate-y-2/3 w-1/3 h-1/3 bg-orange-500 rounded-full opacity-50"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-4">About <span className="font-normal text-3xl">Us</span></h1>
            <p className="text-custom-lg font-medium leading-custom-lg text-left font-inter text-black mb-8 pt-10">
              At OpenTome, we believe in the power of books to enlighten, inspire, and transform lives.
              Founded by Sandip Thapa Magar, our online bookstore is dedicated to providing a seamless
              and enriching experience for book lovers everywhere.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <img src="https://images.unsplash.com/photo-1516295904088-1ff1398c9596?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bookshelf" className="shadow-lg rounded-full"/>
          </div>
        </div>

        <div className="my-8 border-t border-gray-300 mt-20 mb-20"></div>

        <div className="flex flex-col lg:flex-row justify-around text-center mb-5 mt-5">
          <div className='mb-10'>
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-lg">Countries Served</p>
          </div>
          <div className='mb-10'>
            <h2 className="text-4xl font-bold">500K+</h2>
            <p className="text-lg">Books Served</p>
          </div>
          <div className='mb-10'>
            <h2 className="text-4xl font-bold">200K+</h2>
            <p className="text-lg">Reviews & Ratings</p>
          </div>
        </div>

        <div className="my-8 border-t border-gray-300 mt-20"></div>

        <div>
          <div className="flex flex-col lg:flex-row justify-between mb-8 mt-20">
            <div className="flex-1 mr-4 pl-5">
              <h1 className="text-5xl font-bold mb-4">Our <span className="font-normal text-3xl">Mission</span></h1>
              <p className="text-custom-lg font-medium leading-custom-lg text-left font-inter text-black mb-8">
                Our mission at OpenTome is to connect readers with the books they love. 
                We strive to offer a diverse selection of books across genres and languages, 
                ensuring that everyone can find something that resonates with them.
                From the latest bestsellers to rare finds, we are committed to providing 
                quality literature to all corners of the world.
              </p>
            </div>
            <div className="flex-1 ml-4">
              <h1 className="text-5xl font-bold mb-4">Our <span className="font-normal text-3xl">Values</span></h1>
              <p className="text-custom-lg font-medium leading-custom-lg text-left font-inter text-black mb-8">
                At OpenTome, we are driven by a passion for books and the belief that 
                reading should be accessible to everyone. We value diversity, inclusion, 
                and the joy of discovery that comes with every turn of a page.
              </p>
            </div>
          </div>

          <div className="my-8 border-t border-gray-300 mt-20"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
