const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, {
  timestamps: false 
});

module.exports = mongoose.model('Order', orderSchema);
