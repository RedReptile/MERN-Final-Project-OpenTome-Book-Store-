import React, { useState, useEffect } from 'react';
import CardComponent from '../Card/CardComponent.jsx';
import BooksRowComponent from '../Card/BookRowComponets.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const categories = [
  'All Genres', 'Adventure', 'Mystery', 'Horror', 'Thriller', 'Romance', 'Historical', 'Fantasy',
];

const CategoriesComponent = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Genres');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        const allBooks = response.data;

        // Filter books based on the selected category
        const filteredBooks = selectedCategory === 'All Genres'
          ? allBooks
          : allBooks.filter(book => book.category === selectedCategory);

        setBooks(filteredBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [selectedCategory]);

  const handleBookSelect = (selectedBook) => {
    // Save the selected book data to localStorage
    localStorage.setItem('selectedBook', JSON.stringify(selectedBook));
    navigate('/order');
  };

  const bookData = [
    {
      imgUrl: "https://s3-alpha-sig.figma.com/img/7ffe/9d9e/d9a213fe7e11a44dd888f6cabafa2add?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-jXZDzquhdLaeC~zowVPWW51kV8hJovJaDB3LOBSh6qp3QQf8ARzEzQ2wNJusE0xDjIW5Z~QlG6XSzr~Q3QivYCjGkru7CHXef9ZO9zV1QBJ4zpGANZNhAaIfsHejQGV4Z6-G3ie55OEQ7fiXWFKvQ8H5n5M1cWbhiaj8DL0S6du4NrR2jRTxd5~dfhdnMD-lTdoQqpG1z~ME9qIGaT1HKuxFoh~L0wYQY08PG-1ImktYCKrNoczsgSoMpcwXhexi18T9dpo1WfJHDe2Se46DrR6~tVvFATYeOV35By0Y-t-fkCtrEwjPR5E8X2JzekbVlarIrQv6nPGkC7pNZJ3w__",
      title: "All The Light We Cannot See",
      author: "Anthony Doerr",
      rating: "4.5",
      description: "A blind girl and a German soldier's paths cross in WWII France.",
    },
    {
      imgUrl: "https://s3-alpha-sig.figma.com/img/7ffe/9d9e/d9a213fe7e11a44dd888f6cabafa2add?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-jXZDzquhdLaeC~zowVPWW51kV8hJovJaDB3LOBSh6qp3QQf8ARzEzQ2wNJusE0xDjIW5Z~QlG6XSzr~Q3QivYCjGkru7CHXef9ZO9zV1QBJ4zpGANZNhAaIfsHejQGV4Z6-G3ie55OEQ7fiXWFKvQ8H5n5M1cWbhiaj8DL0S6du4NrR2jRTxd5~dfhdnMD-lTdoQqpG1z~ME9qIGaT1HKuxFoh~L0wYQY08PG-1ImktYCKrNoczsgSoMpcwXhexi18T9dpo1WfJHDe2Se46DrR6~tVvFATYeOV35By0Y-t-fkCtrEwjPR5E8X2JzekbVlarIrQv6nPGkC7pNZJ3w__",
      title: "Where The Crawdads Sing",
      author: "Delia Owens",
      rating: "4.8",
      description: "A mystery unfolds in the wilds of North Carolina.",
    },
    {
      imgUrl: "https://s3-alpha-sig.figma.com/img/f612/beb7/1e6ab20a3791f739a79501c08d479aea?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aXSffKDrWLnxxMHalYj4wufag5DcaLoKDTjuBPMjGm~QFCBB-a7unQ8JNzTGzsM5hErS-KFYpEyC3g7Lxw-gDZ52UeHeFri8o7g5~Eafoy5IBxOFTy0nm3iITP5k~MoQzQlcIQevexCuRHNbpOqxnUln-fHFii7sItknMWyD8YV9pPvGX1rW6WZOSWKF19NcVNqqn2NCl2VlPloP~nGW0aTQXeNKa5DftwUnAAJmv2Xusb4f2jSHzRq2e8DACbnmR-rrpY5smXn2iIX9DljGh5Fjg~IcSqeZp7WOq-hROL5bHhGnCUbXJVz9iYRcgjR3kmtzvFYUv~0bZxj8JetlcA__",
      title: "Rich People Problems",
      author: "Kevin Kwan",
      rating: "4.3",
      description: "A comedic look at Asia's wealthy elite.",
    },
    {
      imgUrl: "https://s3-alpha-sig.figma.com/img/7ffe/9d9e/d9a213fe7e11a44dd888f6cabafa2add?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-jXZDzquhdLaeC~zowVPWW51kV8hJovJaDB3LOBSh6qp3QQf8ARzEzQ2wNJusE0xDjIW5Z~QlG6XSzr~Q3QivYCjGkru7CHXef9ZO9zV1QBJ4zpGANZNhAaIfsHejQGV4Z6-G3ie55OEQ7fiXWFKvQ8H5n5M1cWbhiaj8DL0S6du4NrR2jRTxd5~dfhdnMD-lTdoQqpG1z~ME9qIGaT1HKuxFoh~L0wYQY08PG-1ImktYCKrNoczsgSoMpcwXhexi18T9dpo1WfJHDe2Se46DrR6~tVvFATYeOV35By0Y-t-fkCtrEwjPR5E8X2JzekbVlarIrQv6nPGkC7pNZJ3w__",
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: "4.6",
      description: "Exploring life's choices through a magical library.",
    },
    {
      imgUrl: "https://s3-alpha-sig.figma.com/img/2f5a/85e9/6ea1fdfd9240cf71de790a6a91f45d1a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZRbRLdT0GD6Fm7faWkL9-InQvdbcHowNcIOj9y~YsZKeH-Y0kiPTfFS4woDsANcckWPHF9d9RnAdsENwt6o5p97BvFIIQ6RDcxiWu7dE5-FATZLemCotYvqCrLRNU12pmizF7GB92b6ZLY8cWoc0narqsiFwq2eMcjc27sZDC-6V79WT-vM5Ob5K8oMXbsnPOImt79pt-EpWyJqBueKF7jreeSJ76Yjrxej5K~m6GgmaFTjbpOGOvLzP~cKat6uCNNkHn~ojW8-IONPa4pQNIytRpI8OEojsR~9dA~DXeI7mm3tehPHvHgWi6GIXmC7bel6gJUpyUFzflCEVSsb-Q__",
      title: "Educated",
      author: "Tara Westover",
      rating: "4.7",
      description: "A memoir about breaking free from an oppressive upbringing.",
    },
    {
      imgUrl: "https://s3-alpha-sig.figma.com/img/2f5a/85e9/6ea1fdfd9240cf71de790a6a91f45d1a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZRbRLdT0GD6Fm7faWkL9-InQvdbcHowNcIOj9y~YsZKeH-Y0kiPTfFS4woDsANcckWPHF9d9RnAdsENwt6o5p97BvFIIQ6RDcxiWu7dE5-FATZLemCotYvqCrLRNU12pmizF7GB92b6ZLY8cWoc0narqsiFwq2eMcjc27sZDC-6V79WT-vM5Ob5K8oMXbsnPOImt79pt-EpWyJqBueKF7jreeSJ76Yjrxej5K~m6GgmaFTjbpOGOvLzP~cKat6uCNNkHn~ojW8-IONPa4pQNIytRpI8OEojsR~9dA~DXeI7mm3tehPHvHgWi6GIXmC7bel6gJUpyUFzflCEVSsb-Q__",
      title: "Becoming",
      author: "Michelle Obama",
      rating: "4.9",
      description: "Michelle Obama's journey from childhood to the White House.",
    },
    {
      imgUrl: "https://s3-alpha-sig.figma.com/img/2f5a/85e9/6ea1fdfd9240cf71de790a6a91f45d1a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZRbRLdT0GD6Fm7faWkL9-InQvdbcHowNcIOj9y~YsZKeH-Y0kiPTfFS4woDsANcckWPHF9d9RnAdsENwt6o5p97BvFIIQ6RDcxiWu7dE5-FATZLemCotYvqCrLRNU12pmizF7GB92b6ZLY8cWoc0narqsiFwq2eMcjc27sZDC-6V79WT-vM5Ob5K8oMXbsnPOImt79pt-EpWyJqBueKF7jreeSJ76Yjrxej5K~m6GgmaFTjbpOGOvLzP~cKat6uCNNkHn~ojW8-IONPa4pQNIytRpI8OEojsR~9dA~DXeI7mm3tehPHvHgWi6GIXmC7bel6gJUpyUFzflCEVSsb-Q__",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      rating: "4.5",
      description: "A woman stops speaking after killing her husband.",
    },
    {
      imgUrl: "https://s3-alpha-sig.figma.com/img/7ffe/9d9e/d9a213fe7e11a44dd888f6cabafa2add?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-jXZDzquhdLaeC~zowVPWW51kV8hJovJaDB3LOBSh6qp3QQf8ARzEzQ2wNJusE0xDjIW5Z~QlG6XSzr~Q3QivYCjGkru7CHXef9ZO9zV1QBJ4zpGANZNhAaIfsHejQGV4Z6-G3ie55OEQ7fiXWFKvQ8H5n5M1cWbhiaj8DL0S6du4NrR2jRTxd5~dfhdnMD-lTdoQqpG1z~ME9qIGaT1HKuxFoh~L0wYQY08PG-1ImktYCKrNoczsgSoMpcwXhexi18T9dpo1WfJHDe2Se46DrR6~tVvFATYeOV35By0Y-t-fkCtrEwjPR5E8X2JzekbVlarIrQv6nPGkC7pNZJ3w__",
      title: "The Alchemist",
      author: "Paulo Coelho",
      rating: "4.7",
      description: "A young shepherd searches for his personal legend.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white mt-1 mb-10">
      <div className="relative flex flex-col items-center justify-center w-full h-screen p-5">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/9335373/9335373-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>

        {/* Content Over the Video */}
        <div className="relative flex flex-col md:flex-row items-start justify-between w-full max-w-6xl mx-auto mb-20">
          <div className="md:w-1/2 mb-3 md:mb-0 md:pr-8 mt-11 z-10 relative">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-10 text-white text-left whitespace-nowrap w-1">
              Welcome to OpenTome <p>Categories!</p>
            </h1>
            <p className="text-custom-lg font-medium leading-custom-lg text-left font-inter text-white mb-8">
              Explore our vast collection of books across various genres. Whether you love thrilling mysteries, heartfelt romances, or enlightening non-fiction, we've got something for you. Check out our top recommendations in each category and find your next great read.
            </p>
            <button className="bg-black text-white px-10 py-3 hover:bg-gray-700 border-white border-2 transition duration-300 ease-in-out mb-8 font-inter font-medium rounded-full">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Category List and Books */}
      <div className="relative flex flex-col md:flex-row w-full max-w-6xl mx-auto my-20 mt-20">
        <div className="md:w-1/4 p-4">
          <h2 className="text-xl font-semibold mb-4">Book by Genre</h2>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`text-${selectedCategory === category ? 'orange-800' : 'orange-400'} hover:text-orange-800 font-inter font-semibold`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-3/4 p-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Recommendation</h2>
          <div className="relative">
            {/* Circular Background Shapes */}
            <div className="absolute inset-0 z-0 flex justify-center items-center">
              {/* Circular shapes */}
              <div className="bg-blue-200 w-96 h-96 rounded-full absolute -left-20 top-10" style={{ clipPath: 'circle(50% at 50% 50%)', opacity: 0.7 }}></div>
              <div className="bg-green-200 w-80 h-80 rounded-full absolute -right-10 top-32" style={{ clipPath: 'circle(50% at 50% 50%)', opacity: 0.7 }}></div>
              <div className="bg-pink-200 w-72 h-72 rounded-full absolute -left-10 bottom-20" style={{ clipPath: 'circle(50% at 50% 50%)', opacity: 0.7 }}></div>
              <div className="bg-yellow-200 w-64 h-64 rounded-full absolute right-0 bottom-10" style={{ clipPath: 'circle(50% at 50% 50%)', opacity: 0.7 }}></div>
              <div className="bg-orange-200 w-56 h-56 rounded-full absolute left-20 top-0" style={{ clipPath: 'circle(50% at 50% 50%)', opacity: 0.7 }}></div>
              <div className="bg-red-200 w-48 h-48 rounded-full absolute right-20 top-20" style={{ clipPath: 'circle(50% at 50% 50%)', opacity: 0.7 }}></div>
            </div>
            <div className="relative z-10">
              <CardComponent data={bookData} />
            </div>

            <div className="mt-10 w-full pl-[200px]">
              <p className="text-gray-700 text-2xl font-bold mb-10">Our Categories</p>
            </div>
            
            <div className="w-full md:w-3/4 p-4">
              <BooksRowComponent books={books} onBookSelect={handleBookSelect} />
            </div>
          </div>
        </div>
      </div>

      <div>
      <div className="mt-[-50px] w-full max-w-6xl mx-auto flex flex-col items-center bg-white py-8 px-4 p-10 pt-20 md:px-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-6">Stay updated with the latest book releases, author interviews, and exclusive offers.</p>
        <form className="flex flex-col md:flex-row w-full md:max-w-3xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-4 md:mb-0 md:mr-0 p-3 border border-gray-300 focus:outline-none focus:border-gray-500"
          />
          <button
            type="submit"
            className="bg-black font-inter font-medium text-white px-5 py-3 hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>

      <footer className="w-full bg-black text-white py-12 mt-12 p-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:px-16">
          {/* Logo and Social Media */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <img src="https://s3-alpha-sig.figma.com/img/b6fd/d7db/78349301bf808e631ddd9b324f23658e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DVn6Y8I7tNXRCk8d81E7XJ9z-JNnAH5lgF4CUo5AdJyvqVP87I5dhiThSfbwE-KH9HlTKKnHPXaaQbSgbUUwlCfRjlueQCDkEKPIE56qDuPQeeyt0UWEBcJjEhwfnaWvO70SHufs6QgT1JwtthOQ2gDgonrRhPFzIzxY4rEN5XlNNVhDBNeaBxdXZyvqgpA4hClVAkdSiGhAd40XxTafxd0sGqxdqWp-kYr9KhWn9pccq5YrCjqYjtprdDOcxn8G5-AO5KRUe7OgeX4~KUPeYh1u07eI90ZvQuT65V1hlSBr1wYM-6m2UAlY35lhAvHsEXDMulTX2~GocnqJraDNew__" alt="OpenTome Logo" className="h-12 mb-4 mt-[-5px]" />
            <p className="text-sm text-gray-400 mb-4">
              Follow us on 
              <a href="https://www.facebook.com" className="text-white hover:underline ml-1">Facebook</a>,
              <a href="https://www.twitter.com" className="text-white hover:underline mx-1">Twitter</a>, and
              <a href="https://www.instagram.com" className="text-white hover:underline ml-1">Instagram</a> 
              for the latest updates, book recommendations, and more!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          {/* Our Services */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Book Collection</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Seamless Shopping</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Recommendation</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Promo & Discount</a></li>
            </ul>
          </div>
          {/* Additional Services */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Reviews</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Insights</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Book Inquiries</a></li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@opentome.com" className="text-gray-400 hover:text-white">info@opentome.com</a></li>
              <li className="text-gray-400">Kandevsthan, Kupandole, CA 90210</li>
              <li className="text-gray-400">Nepal</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>

    </div>
  );
};

export default CategoriesComponent;
