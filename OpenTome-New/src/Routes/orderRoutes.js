// orderRoutes.js

const express = require('express');
const { createOrder, updatePaymentStatus, cancelOrder, getOrdersByUserId } = require('../Controllers/orderControllers');
const auth = require('../Middleware/authMiddleware');
const router = express.Router();

// Create a new order
router.post('/', createOrder);


// Update payment status of an order
router.patch('/:orderId/pay', auth, updatePaymentStatus);

// Cancel an order
router.delete('/:orderId', auth, cancelOrder);

// Get an order by ID
router.get('/user/:userId', getOrdersByUserId);

module.exports = router;
