import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // For toast notifications
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios'; // For HTTP requests
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Heroicons

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showModal, setShowModal] = useState(false); // State for showing promo code modal
  const [promoCode, setPromoCode] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const generatePromoCode = () => {
    const promoCode = 'PROMO2024'; 
    localStorage.setItem('promoCode', promoCode);
    setPromoCode(promoCode);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });

      // Generate promo code
      generatePromoCode();

      // Show success toast
      toast.success('Registration successful!');

      // Clear the form fields
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      // Show error toast with error message
      toast.error(`Registration failed! ${error.response?.data?.message || 'Please try again.'}`);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Redirect to login page after closing the modal
    setTimeout(() => {
      navigate('/');
    }); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex bg-white rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side - Form */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Create an account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-10">
              <label className="block text-gray-700 mb-4">First name</label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-4">Email</label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-4">Password</label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 py-2 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="mb-4 mt-10">
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700"
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
        {/* Right Side - Image */}
        <div className="flex-1 relative flex items-center justify-start overflow-hidden">
          <div className="absolute w-full h-full overflow-hidden flex items-center justify-center">
            <div
              className="bg-orange-500 w-full h-full absolute transform rotate-[45deg] origin-center translate-x-[-13%] translate-y-[10%]"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                opacity: 0.8,
              }}
            ></div>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/5966/733f/c05e88bb4fd75cf24646db37855f396e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E7cAisFQsB1PclhUymTsIhnfZIXZouku6IPPX605DkbZ6aEE8d8QcUz0k6QOvQGdQGOd4IvlbuRKKI~OlosJFs0~9OFTxHyGGvm3EGxLb1ZN~jgdMzXfok8rhQFZ1Gs2QWR1s7y7nK88uzB0MhtS12GYjMbwNUK4gmX1jjH6FFApWGLbiYtmUajpFLoWSCkbLn3We0kzcKBqj8QE8mK5HJGxDyS3f~YhFDsuenhA4AUEaFWBj7GOlikomj0IMBtNgWrkhGaUZ8HtvyTQdFrKxPkbHWcTPOUJWaWmT3dur519R-U0vKDYKdr5tadMAijXGYRd3guXJN993bfcGgCXSw__"
            alt="New illustration"
            className="max-w-full h-auto relative z-10 ml-40"
          />
        </div>
      </div>

      {/* Promo Code Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-2">Congratulations!</h2>
            <p className="text-sm mb-4">Promo code below for discount on first Order. Promo are set automatically.</p>
            <div className="bg-gray-100 p-2 rounded-md text-center font-serif text-lg mb-4">
              {promoCode}
            </div>
            <button
              className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
              onClick={handleModalClose}
            >
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SignupPage;
