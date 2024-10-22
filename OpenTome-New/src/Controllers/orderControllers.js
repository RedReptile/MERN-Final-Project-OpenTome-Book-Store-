// orderControllers.js

const Order = require('../Models/orderModel');

// Create a new order
const createOrder = async (req, res) => {
  const { userId, books, totalPrice, address } = req.body;

  console.log("Received data:", req.body); // Add this line to log the incoming request data

  if (!userId || !totalPrice || !address) {
    return res.status(400).json({ message: 'Missing required fields: user, totalPrice, or address' });
  }

  try {
    const newOrder = await Order.create({
      user: userId,
      books,
      totalPrice,
      address
    });

    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
};

// Update payment status of an order
const updatePaymentStatus = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findByIdAndUpdate(orderId, { paymentStatus: 'Paid' }, { new: true });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Handle payment processing via Stripe here (dummy example)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: order.totalPrice * 100, // amount in cents
      currency: 'NPR',
      description: `Payment for Order ${order._id}`
    });

    // Return client_secret to frontend for payment processing
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update payment status', error: error.message });
  }
};

// Cancel (Delete) an order
const cancelOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findByIdAndDelete(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ message: 'Order cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to cancel order', error: error.message });
  }
};

// Get an order by ID
const getOrdersByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ user: userId }).populate('user').populate('books');
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: 'No orders found for this user' });
    }
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve orders', error: error.message });
  }
};



module.exports = { createOrder, updatePaymentStatus, cancelOrder, getOrdersByUserId };
