
const express = require('express');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const booksRouter = require('./Routes/bookRoutes');
const profileRoutes = require('./Routes/profileRoutes');
const orderRoutes = require('./Routes/orderRoutes'); 
const userRoutes = require('./Routes/userRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express(); 
const port = process.env.PORT || 5000;

connectDB();
app.use(cors({
  origin: 'http://localhost:3000', 
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/books', booksRouter);
app.use('/api/profile', profileRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/api', paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

