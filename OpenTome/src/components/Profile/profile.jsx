import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import OrderHistory from '../Menu/OrderHistory';

const ProfilePage = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    console.log('Profile updated:', { ...user, bio, profileImage });

    // Send a request to update the profile in your backend
    // Example:
    // const response = await fetch('http://localhost:5000/api/users/update', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //   },
    //   body: JSON.stringify({ ...user, bio, profileImage })
    // });
    // const result = await response.json();
    // console.log('Update result:', result);

    // Clear the form fields
    setBio('');
    setProfileImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file)); // Temporary preview of the image
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      {/* Background Shapes */}
      <div className="absolute top-[30%] left-[30%] w-32 h-32 lg:w-48 lg:h-48 bg-blue-200 rounded-full opacity-50 z-0"></div>
      <div className="absolute top-[50%] left-[20%] w-48 h-48 lg:w-72 lg:h-72 bg-yellow-200 rounded-full opacity-50 z-0"></div>
      <div className="absolute bottom-[20%] right-[20%] w-48 h-48 lg:w-72 lg:h-72 bg-red-200 rounded-full opacity-50 z-0"></div>
      <div className="absolute bottom-[10%] left-[10%] w-40 h-40 lg:w-56 lg:h-56 bg-green-200 rounded-full opacity-50 z-0"></div>

      <div className="flex flex-col lg:flex-row bg-transparent rounded-lg overflow-hidden max-w-full lg:max-w-4xl w-full relative z-10">
        {/* Left Side - Profile and Navigation */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={imagePreview || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-md"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-gray-700 text-sm mb-1">Bio</h4>
            <p className="text-gray-500 text-sm">
              {bio || 'No bio available.'}
            </p>
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => navigate('')}
                className="block text-gray-700 hover:text-blue-500 w-full text-left"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('orders')}
                className="block text-gray-700 hover:text-blue-500 w-full text-left"
              >
                Order History
              </button>
            </li>
          </ul>
        </div>

        {/* Right Side - Conditional Rendering Based on Route */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center bg-white bg-opacity-80">
          <Routes>
            <Route
              path="/"
              element={
                <form onSubmit={handleProfileUpdate}>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6">Profile</h2>
                  <div className="flex flex-col lg:flex-row gap-4 mb-4 mt-10">
                    <div className="flex-1">
                      <label className="block text-gray-700">Username</label>
                      <input
                        type="text"
                        value={user.name}
                        readOnly
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      readOnly
                      className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Bio</label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      rows="3"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Profile Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Profile Preview"
                        className="w-12 h-12 lg:w-16 lg:h-16 mt-4 rounded-full"
                      />
                    )}
                  </div>
                  <div className="mb-4 mt-10">
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              }
            />
            <Route path="orders" element={<OrderHistory />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
