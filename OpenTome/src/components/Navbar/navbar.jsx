import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsAdmin(user.role === 'admin');
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-7">
            <Link to="/" className="text-2xl font-bold text-black flex items-center">
              <img src='https://s3-alpha-sig.figma.com/img/6c5d/5579/b3d8daa246815edaadb900866ee0f7e4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lKuKhmMc1P~gpTfYL-B5jtZ6Ao1afk4qJdvD8s9ekJtpGsOEV0Sy7ZbQEJL5fqW03YBE2VCqxO-WxD~Zotiu-8vIblHeUkWBNwKNmss~UdR70loVX2EvEtKIgY9pD-IrdljmWobdzlJpj7XZF4oDzS1hkMfzDU39wk17k7FiAon7E5pAKGOBJMdO1x0LruEHm2BMJE3Ttjh0rYflXgWGm0wpnxx2zjUoE8M72gVDzbdOV12wjuxiLGMatYSfIf-CvCYXSNGfFv2fDMctNM67IZaD2IG~IBrIkBmMOWQxRyPK-9oU7o5yKmW2YfYIAuoVZLBFUaB1rbFyOCAbL9ggOw__' alt="Logo" className="h-16 mr-2" />
            </Link>
          </div>

          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 font-medium hover:text-black transition duration-300">Home</Link>
            <Link to="/categories" className="text-gray-600 font-medium hover:text-black transition duration-300">Categories</Link>
            <Link to="/about" className="text-gray-600 font-medium hover:text-black transition duration-300">About</Link>
            <Link to="/profile" className="text-gray-600 font-medium hover:text-black transition duration-300">Profile</Link>
            {isAdmin && (
              <Link to="/admin" className="text-gray-600 font-medium hover:text-black transition duration-300">Admin</Link>
            )}
          </div>

          {/* Sign In and Sign Up buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/signin" className="text-white bg-black border border-black px-6 text-sm font-medium py-2 transition duration-300 font-inter rounded-full">
              Sign In
            </Link>
            <Link to="/signup" className="text-black border border-black px-6 text-sm font-medium py-2 transition duration-300 font-inter rounded-full">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="outline-none mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-600 hover:text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden text-center">
          <ul>
            <li><Link to="/" className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-200 transition duration-300">Home</Link></li>
            <li><Link to="/categories" className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-200 transition duration-300">Categories</Link></li>
            <li><Link to="/about" className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-200 transition duration-300">About</Link></li>
            <li><Link to="/profile" className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-200 transition duration-300">Profile</Link></li>
            <li><Link to="/signin" className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-200 transition duration-300">Sign In</Link></li>
            <li><Link to="/signup" className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-200 transition duration-300">Sign Up</Link></li>
            {isAdmin && (
              <li><Link to="/admin" className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-200 transition duration-300">Admin</Link></li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
