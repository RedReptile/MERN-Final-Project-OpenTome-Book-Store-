// Routes/userRoutes.js

const express = require('express');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../Controllers/userControlelrs');
const auth = require('../Middleware/authMiddleware');
const authorizeRole = require('../Middleware/authorizeRoleMiddleware');

const router = express.Router();

// Get all users (Admin only)
router.get('/', auth, authorizeRole('admin'), getAllUsers);

// Get user by ID (Publicly accessible)
router.get('/:id', getUserById);

// Route to update a user (Allow users to update their own data)
router.put('/update/:id', auth, updateUser);

// Delete a user (Admin only)
router.delete('/:id', auth, authorizeRole('admin'), deleteUser);

module.exports = router;
