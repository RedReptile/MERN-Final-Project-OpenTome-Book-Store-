const Profile = require('../Models/profileModel');
const User = require('../Models/authModel');

// Update user profile
const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { name, email, bio } = req.body;
  const profileImage = req.file ? req.file.path : null; // Get the uploaded image path

  try {
    // Find user by ID and update
    const user = await User.findByIdAndUpdate(id, { name, email, bio }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Find or create profile for user
    let profile = await Profile.findOne({ user: id });
    if (!profile) {
      profile = new Profile({ user: id, bio, profileImage });
      await profile.save();
    } else {
      profile.bio = bio;
      profile.profileImage = profileImage;
      await profile.save();
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get the authenticated user's profile
const getUserProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all user profiles
const getAllUserProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a user profile by ID
const getUserProfileById = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await Profile.findById(id);
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete the authenticated user's profile
const deleteUserProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndDelete({ user: req.user.id });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { updateProfile, getUserProfile, getAllUserProfiles, getUserProfileById, deleteUserProfile };