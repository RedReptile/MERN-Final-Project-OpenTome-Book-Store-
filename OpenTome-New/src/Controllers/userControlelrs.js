// Controllers/userController.js

const User = require('../Models/authModel');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude password field
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    let userId = req.params.id.trim(); // Trim any extra whitespace or newlines
    console.log('Fetching user with ID:', userId);

    const user = await User.findById(userId);
    console.log('User fetched:', user);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
  
    try {
      // Check if the user is trying to update their own profile
      if (req.user.id !== id) {
        return res.status(403).json({ message: 'Not authorized to update this user' });
      }
  
      // Find user by ID and update
      const user = await User.findByIdAndUpdate(id, { name, email, password, role }, { new: true });
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { getAllUsers, getUserById, updateUser, deleteUser };
