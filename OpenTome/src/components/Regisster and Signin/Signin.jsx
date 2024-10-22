import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // For toast notifications
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios'; // For HTTP requests
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Heroicons


const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate(); // Hook for navigation

  const handleSignOut = () => {

    localStorage.clear();
    navigate('/');
};

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
  
      const { token, user } = response.data; // Assume response includes 'user' data
  
      if (token) {
        // Store token and user data
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user)); // Store user data in local storage
  
        // Show success toast
        toast.success('Login successful!');
  
        // Clear the form fields
        setEmail('');
        setPassword('');
  
        // Delay for 2 seconds before redirecting
        setTimeout(() => {
          navigate('/'); // Redirect to the profile page
        }, 2000); // 2 seconds delay
      } else {
        toast.error('No token received!');
      }
    } catch (error) {
      // Show error toast
      toast.error('Login failed! Please check your credentials.');
      console.error('Login error:', error); // Log the error for debugging
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex bg-white rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side - Form */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-10">
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
                Login
              </button>

              {/* Sign-Out Button */}
              <button
                onClick={handleSignOut}
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 mt-4"
              >
                Sign Out
              </button>

            </div>
          </form>
        </div>
        {/* Right Side - Image */}
        <div className="flex-1 relative flex items-center justify-start overflow-hidden">
          <div className="absolute w-full h-full overflow-hidden flex items-center justify-center">
            <div
              className="bg-orange-500 w-full h-full absolute transform rotate-[45deg] origin-center translate-x-[-12%] translate-y-[10%]"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                opacity: 0.8,
              }}
            ></div>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/5966/733f/c05e88bb4fd75cf24646db37855f396e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXtsbr-N6YKrb30gsbKY2taOx8pr6qVkdPL5RIefOBs404u24aLy23ahRBt3hb7QbemfOLs0BNkFM8rqqDkCZaq~zXmrFfeL5kySqFAzKo8QL0CLDIKmJzpYaN0hiQbLlboWfe5eVo9hDdX66dDd2Z-qQhKm3hWvfVgA3FSa7x4~dUx8ayFCEN0ZY6PNHNsZGcSCpAKUDQ5R2ED~1Q9aQ0yivmOfkNbuExlWEJTB5qGoaSP8RbLUaXVger8Q2vGyG7uK5D4ltxJY6q0w5oWVNIvfJAkMAaaycc5vzS5ae-2lUj3-qbObuczeYT~VRtYiw8tmfZ8qan4m7pRIuPxQPQ__"
            alt="New illustration"
            className="max-w-full h-auto relative z-10 ml-40"
          />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;

