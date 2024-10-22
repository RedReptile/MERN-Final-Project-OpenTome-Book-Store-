import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const OrderComponent = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        user: '',
        books: '',
        totalPrice: '',
        address: ''
    });

    const [bookInfo, setBookInfo] = useState({
        title: '',
        author: '',
        price: '',
        category: '',
        description: ''
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const selectedBook = JSON.parse(localStorage.getItem('selectedBook'));
        const promoCode = localStorage.getItem('promoCode');

        if (storedUser && selectedBook) {
            const userId = storedUser._id || '';
            const bookId = selectedBook._id || '';
            let bookPrice = selectedBook.price || '';

            // Apply 30% discount if promo code exists
            if (promoCode) {
                bookPrice = (bookPrice * 0.7).toFixed(2); // 30% discount
            }

            setFormData({
                user: userId,
                books: bookId,
                totalPrice: bookPrice,
                address: ''
            });

            setBookInfo({
                title: selectedBook.title || '',
                author: selectedBook.author || '',
                price: bookPrice,
                category: selectedBook.category || '',
                description: selectedBook.description || ''
            });
        } else {
            console.warn('User or book data not found');
            navigate('/categories');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Order data submitted:', formData);

        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: formData.user,
                    books: [formData.books],
                    totalPrice: formData.totalPrice,
                    address: formData.address
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Order placed successfully:', data);
                localStorage.setItem('orderId', data.order._id);

                // Remove promo code after the first order
                localStorage.removeItem('promoCode');

                toast.success('Order placed successfully!');
                setTimeout(() => navigate('/payment'), 2000);
            } else {
                console.error('Error placing order:', data);
                toast.error(`Error placing order: ${data.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-white">
            {/* Background Shapes */}
            <div className="absolute top-[30%] left-[30%] w-48 h-48 bg-blue-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute top-[50%] left-[20%] w-72 h-72 bg-yellow-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-red-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute bottom-[10%] right-[10%] w-48 h-48 bg-purple-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute bottom-[10%] left-[10%] w-56 h-56 bg-green-200 rounded-full opacity-50 z-0"></div>

            {/* Form and Book Info */}
            <div className="flex flex-col md:flex-row w-full max-w-4xl relative z-10">
                {/* Left column for the form */}
                <div className="flex-1 flex items-center justify-center px-6 md:px-10">
                    <div className="bg-white p-6 md:p-8 max-w-md w-full z-20 mt-10 opacity-80 rounded-lg">
                        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10">Place Your Order</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 md:mb-6">
                                <label className="block text-gray-700 mb-1">Total Price (NPR)</label>
                                <input
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-600"
                                    type="text"
                                    name="totalPrice"
                                    value={formData.totalPrice}
                                    onChange={handleChange}
                                    readOnly
                                />
                            </div>
                            <div className="mb-4 md:mb-6">
                                <label className="block text-gray-700 mb-1">Address</label>
                                <textarea
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-600"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4 md:mb-6">
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
                                >
                                    Place Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
{/* Book information */}
<div className="flex-1 flex items-center justify-center px-6 md:px-10 mt-8 md:mt-0">
                    <div className="p-6 md:p-8 max-w-md w-full z-20 opacity-80 rounded-lg">
                        <h2 className="text-xl md:text-2xl font-bold mb-6">Book Information</h2>
                        <div className="mb-4">
                            <strong>Title:</strong> {bookInfo.title}
                        </div>
                        <div className="mb-4 text-custom-lg font-medium leading-custom-lg font-inter">
                            <strong>Author:</strong> {bookInfo.author}
                        </div>
                        <div className="mb-4">
                            <strong>Price (NPR):</strong> {bookInfo.price}
                        </div>
                        <div className="mb-4">
                            <strong>Category:</strong> {bookInfo.category}
                        </div>
                        <div className="mb-4">
                            <strong>Description:</strong> {bookInfo.description}
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default OrderComponent;
