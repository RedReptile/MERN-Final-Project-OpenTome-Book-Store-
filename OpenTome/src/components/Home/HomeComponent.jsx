
import React, { useState } from 'react';


const HomeComponent = () => {

const [displayText, setDisplayText] = useState('Discover Your Next Favourite Book');

const handleTextChange = (newText) => {
  setDisplayText(newText);
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white0 mt-1">
      <div className="relative flex flex-col items-center justify-center w-full h-screen p-10 pt-15">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/6929264/6929264-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative flex flex-col md:flex-row items-start justify-between w-full max-w-6xl mx-auto mb-20">
          <div className="md:w-1/2 mb-3 md:mb-0 md:pr-8 mt-11 z-10 relative">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight whitespace-nowrap">Uncover Stories</h1>
            <p className="text-custom-lg font-medium leading-custom-lg text-left font-inter text-white mb-8 ">
              Welcome to OpenTome, the ultimate destination for book lovers around the globe. Whether you're an avid reader
              searching for your next great read or a seller looking to reach a wider audience, OpenTome is here to make your
              experience seamless and enjoyable.
            </p>
            <button className="bg-black text-white px-5 py-3 hover:bg-gray-700 transition duration-300 ease-in-out mb-8 font-inter font-medium rounded-full">Start Journey</button>
            <div className="flex flex-col md:flex-row md:justify-start space-y-8 mt-14 md:space-y-0 md:space-x-12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white">100+</h2>
                <p className="text-lg text-white font-inter font-medium pt-3">Countries Served</p>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white">500K+</h2>
                <p className="text-lg text-white font-inter font-medium pt-3">Books Served</p>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white">200K+</h2>
                <p className="text-lg text-white font-inter font-medium pt-3">Reviews & Ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl mx-auto mb-20 mt-20"></div>
      <div className="w-full max-w-6xl mx-auto mt-5 mb-5 relative">
        <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-blue-200 rounded-full opacity-50 z-0"></div>
        <div className="absolute top-[-50px] right-[-50px] w-72 h-72 bg-yellow-200 rounded-full opacity-50 z-0"></div>
        <div className="absolute top-[40px] right-[487px] w-72 h-72 bg-red-200 rounded-full opacity-50 z-0"></div>
        <div className="absolute top-[160px] right-[390px] w-48 h-48 bg-purple-200 rounded-full opacity-50 z-0"></div>
        <div className="absolute top-[100px] right-[120px] w-56 h-56 bg-green-200 rounded-full opacity-50 z-0"></div>
        <div className="relative p-10 md:p-0">
          <div className="flex items-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-15">——— Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[-20px] mt-20">
            <div className="flex items-center text-left">
              <div className="w-10 h-10 mr-4">
                <img src="https://s3-alpha-sig.figma.com/img/947c/dac8/db1be5185c561c6293a9b4cf32a91cf0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~8rYtPlBxrOTSv3efW2HBTUZvCjetIC5ntWG7Q5Tl6bRZUP36vgyAFs~gmQ~z0oE~qQNe7NMVTF2w-8kA~eYkfINvTDbewSGX4OHqx8sPVJzFK-Lj6Q3Zk9kNycUgpfuz5p9J3ihDy3-lmZvIqq~JaP-klPC2v91IzEKi~-1wCNfFyu0Z2B2JG5a~NY9BmQxe8QGTX~riYZi4KMx91ctIbk2FJ1bnZGdnDT7TAJBiVR1dkzjbhdaXwTGT226fRDmZq~INfLIe9i6mTmAE9SIAfnUQauPA2Kb9pOtfqbEhDnxRSPxG601luSlV3wFRNx1Tcghqv-mOivksDBpxkzjg__" alt="Icon 1" className='mt-[-38px] h-6 w-10 size-5' />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-7 w-60 font-Inter">Comprehensive Book Collection</h3>
                <p className="font-inter text-gray-700 font-medium w-60">Find thousands of books across genres and languages, from bestsellers to classics</p>
              </div>
            </div>
            <div className="flex items-center text-left">
              <div className="w-10 h-10 mr-4">
                <img src="https://s3-alpha-sig.figma.com/img/64c2/11d5/6c2a2b3156072d1db45a8640be8bdf84?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BfjmnHAcCWTMjV7MsGrxQowT25NfpqRgNpR3sMDMj850hJE72cHcjJFbN7ijpBfMWWWSRsBNqXTzGo6T6hnfmu5Kv8PVLDTo1XPnXsabwu7qKeABEahIXz7CLFfhWjeLD7jDuGSUxKXwni47xBxV7QJXgR0KmvkJtlsmFLaa4WAO53LYuwltHIeNqVhO01gw0um3ao9lHCcSkGa4SybQGNDR25BeCRKED1BQZus6~KYAobBbohdyLoHQfmcdprIUpmttSsll17k9doErcKA6~ehy2R4I0fCDUo1H2BkwhsTicL2bjrKt8LZSvpT7YkiQ60BssKa0Z9zWupMC0q3r7g__" alt="Icon 2" className='mt-[-38px] h-6 w-10 size-5' />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-7 w-60 font-Inter">Seamless Shopping Experience</h3>
                <p className="font-inter text-gray-700 font-medium w-60">Easy search, secure checkout, multiple payment options, for best experience</p>
              </div>
            </div>
            <div className="flex items-center text-left">
              <div className="w-10 h-10 mr-4">
                <img src="https://s3-alpha-sig.figma.com/img/ef04/4b94/00dfef741c63241ef395a843c9686cc7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hWN~QhOdast-7XXwuXm6Gdx7pgxZi~zvIoa-MmaCocmfR~yWXY8eiLosWtEYZxztU2zmIf0Co9ci75V3EE5WGuq6umpjOjnqzKJTDZJA8064pBt72SZSRBawGTZUHPNQf3ZdgH8Lhw2~16oVMLCKAq6PI213V-tbAgSq824kYvoMdPtA5-ycHnQjbO8rfO5nf1qpXGv05mvIgUKpgwZyMHO5z~Mu2HBbi7c5GmWDQ51mtQp3hnjc0DVNjbkOhCfiH1IhMQJv1dzFcp3th3WNj-QaoIN1HEGwqJv~8uyTGZ5oQOvRW1p2prdy3CwmSluZoNa1sq0gs7Ava1ymB99o3A__" alt="Icon 3" className='mt-[-38px] h-6 w-7 size-5' />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-7 w-60 font-Inter">24/7 Customer Support</h3>
                <p className="font-inter text-gray-700 font-medium w-60">Our dedicated team is here to assist you with any inquiries or issues you may have</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto mb-20 mt-40 pl-20 md:p-0">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mr-20 mt-3">
          <img
            src="https://images.unsplash.com/photo-1525720171842-a4992f22f70d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Books"
            className="w-full h-90 rounded-lg shadow-lg border-2 border-black p-2"
          />
        </div>


        {/* Text Section */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 font-inter p-7 md:p-0">Discover Your Next Favourite Book</h1>
          <p className="text-custom-lg font-medium leading-custom-lg font-inter text-black mb-4 mt-5 pr-10">
            {displayText}
          </p>
          
          {/* Book Collections */}
          <div className="text-lg font-medium leading-relaxed text-gray-700">
            <h2 className="text-4x1 font-extrabold mb-4 text-gray-900 mt-12 font-inter">Book Collections</h2>
            <ul className="list-disc list-inside space-y-2">
              <ul className="text-orange-400 cursor-pointer text-custom-lg font-medium leading-custom-lg font-inter" onClick={() => handleTextChange('Explore captivating stories that ignite your imagination and take you on incredible adventures.')}>Fiction Books Collection</ul>
              <ul className="text-orange-400 cursor-pointer text-custom-lg font-medium leading-custom-lg font-inter" onClick={() => handleTextChange('Gain knowledge and insights from expertly written books on a wide range of subjects.')}>Non-Fiction Books Collection</ul>
              <ul className="text-orange-400 cursor-pointer text-custom-lg font-medium leading-custom-lg font-inter" onClick={() => handleTextChange('Immerse yourself in the intricate world of mystery novels. Our curated collection will keep you on the edge of your seat.')}>Mystery Books Collection</ul>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto my-20 p-4 md:p-0 mt-20">

      <div className="absolute inset-0 z-0">
        <div className="bg-orange-500 w-full h-full absolute -rotate-12 transform origin-center" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)', opacity: 0.8 }}></div>
      </div>

      <div className="md:w-1/2 flex flex-col space-y-12 relative z-10 p-10">
        <div>
          <h2 className="text-4xl font-bold mb-8">Finding Your Next Book in Three Simple Steps</h2>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black border-white flex items-center justify-center">
            <img src="https://img.icons8.com/material-rounded/24/ffffff/rocket.png" alt="Discover Icon" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Discover</h3>
            <p className="text-custom-lg font-medium leading-custom-lg font-inter">Explore our vast collection. Browse through a wide range of genres and categories to find books that pique your interest.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <img src="https://img.icons8.com/material-rounded/24/ffffff/light-on.png" alt="Choose Icon" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Choose</h3>
            <p className="text-custom-lg font-medium leading-custom-lg font-inter text-black">Read reviews and descriptions. Select your book by reading detailed descriptions and customer reviews.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <img src="https://img.icons8.com/material-rounded/24/ffffff/checked.png" alt="Enjoy Icon" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Enjoy</h3>
            <p className="text-custom-lg font-medium leading-custom-lg font-inter text-black">Seamless purchase and delivery. Complete your purchase with secure checkout, reliable delivery to your doorstep.</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 ml-20 relative z-10">
        <img src="https://images.unsplash.com/photo-1535403032362-006ffd1795ae?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Books on shelf" className="w-full h-auto max-w-md shadow-md mt-20 rounded-lg" />
      </div>
    </div>


    <div>  
    </div>


    <div className="mt-8 w-full max-w-6xl mx-auto flex flex-col items-center bg-white py-8 px-4 pt-15 md:px-8 rounded-lg">
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
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
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
}

export default HomeComponent;