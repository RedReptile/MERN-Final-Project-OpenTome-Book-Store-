const express = require('express');
const { registerUser, loginUser } = require('../Controllers/authControllers');
const router = express.Router();

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

module.exports = router;
