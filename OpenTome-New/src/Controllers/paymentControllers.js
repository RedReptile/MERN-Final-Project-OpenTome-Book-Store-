const mongoose = require('mongoose');
const Payment = require('../Models/paymentModel');
const Order = require('../Models/orderModel');

// Create a new payment record (simulated without Stripe)
const createPayment = async (req, res) => {
  const { userId, orderId, cardNumber, expirationDate, cvv } = req.body;

  // Validate if orderId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    return res.status(400).json({ message: 'Invalid order ID format' });
  }

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Simulate payment processing here (replace with actual logic if needed)
    // For example, you can just log the payment details for now
    console.log('Processing payment for order:', orderId);
    console.log('Payment details:', {
      user: userId,
      cardNumber,
      expirationDate,
      cvv
    });

    const newPayment = await Payment.create({
      user: userId,
      order: orderId,
      cardNumber,
      expirationDate,
      cvv
    });

    res.status(201).json({ message: 'Payment created successfully', payment: newPayment });
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ message: 'Failed to create payment', error: error.message });
  }
};

// Get payment details by payment ID
const getPaymentById = async (req, res) => {
  const { paymentId } = req.params;

  // Validate if paymentId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(paymentId)) {
    return res.status(400).json({ message: 'Invalid payment ID format' });
  }

  try {
    const payment = await Payment.findById(paymentId).populate('user').populate('order');

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.status(200).json({ payment });
  } catch (error) {
    console.error('Error retrieving payment:', error);
    res.status(500).json({ message: 'Failed to retrieve payment', error: error.message });
  }
};

// Get all payments for a user
const getPaymentsByUserId = async (req, res) => {
  const { userId } = req.params;

  // Validate if userId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: 'Invalid user ID format' });
  }

  try {
    const payments = await Payment.find({ user: userId }).populate('order');

    if (!payments.length) {
      return res.status(404).json({ message: 'No payments found for this user' });
    }

    res.status(200).json({ payments });
  } catch (error) {
    console.error('Error retrieving payments:', error);
    res.status(500).json({ message: 'Failed to retrieve payments', error: error.message });
  }
};

// Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('user').populate('order');

    if (!payments.length) {
      return res.status(404).json({ message: 'No payments found' });
    }

    res.status(200).json({ payments });
  } catch (error) {
    console.error('Error retrieving payments:', error);
    res.status(500).json({ message: 'Failed to retrieve payments', error: error.message });
  }
};

module.exports = { createPayment, getPaymentById, getPaymentsByUserId, getAllPayments };

