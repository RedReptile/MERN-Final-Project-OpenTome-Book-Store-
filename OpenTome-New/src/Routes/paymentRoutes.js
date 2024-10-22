const express = require('express');
const router = express.Router();
const { createPayment, getPaymentById, getPaymentsByUserId, getAllPayments} = require('../Controllers/paymentControllers');

// Create a new payment
router.post('/payments', createPayment);

// Get payment details by payment ID
router.get('/payments/:paymentId', getPaymentById);

// Get all payments for a user
router.get('/payments/user/:userId', getPaymentsByUserId);

// Get all payments
router.get('/payments', getAllPayments);

module.exports = router;
