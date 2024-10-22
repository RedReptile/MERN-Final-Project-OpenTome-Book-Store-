const express = require('express');
const router = express.Router();
const { updateProfile, getUserProfile, getAllUserProfiles, getUserProfileById, deleteUserProfile } = require('../Controllers/profileControllers');
const auth = require('../Middleware/authMiddleware');
const { profileImageUpload } = require('../Middleware/uploadMiddleware');
const authorizeRole = require('../Middleware/authorizeRoleMiddleware');

// Route to update a user profile
router.put('/update/:id', auth, profileImageUpload.single('profileImage'), updateProfile);

// Route to get the authenticated user's profile
router.get('/me', auth, getUserProfile);

// Route to get all user profiles
router.get('/', auth, authorizeRole('admin'), getAllUserProfiles);

// Route to get a user profile by ID
router.get('/:id', auth, authorizeRole('admin'), getUserProfileById);

// Route to delete the authenticated user's profile
router.delete('/me', auth, deleteUserProfile);


module.exports = router;
