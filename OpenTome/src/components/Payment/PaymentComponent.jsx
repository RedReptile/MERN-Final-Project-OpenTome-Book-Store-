import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PaymentComponent = () => {
    const navigate = useNavigate();

    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: ''
    });

    const [userId, setUserId] = useState('');
    const [orderId, setOrderId] = useState('');
    const [cvvVisible, setCvvVisible] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const storedOrderId = localStorage.getItem('orderId');

        if (storedUser && storedOrderId) {
            setUserId(storedUser._id);
            setOrderId(storedOrderId);
        } else {
            console.warn('User or order ID not found in localStorage');
            navigate('/');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    orderId,
                    cardNumber: paymentData.cardNumber,
                    expirationDate: {
                        month: paymentData.expirationMonth,
                        year: paymentData.expirationYear
                    },
                    cvv: paymentData.cvv
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Payment processed successfully:', data);
                toast.success('Payment processed successfully!');
                setTimeout(() => navigate('/'), 2000);
            } else {
                console.error('Error processing payment:', data);
                toast.error('Error processing payment!');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error processing payment!');
        }
    };

    const toggleCvvVisibility = () => {
        setCvvVisible(!cvvVisible);
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-white">
            {/* Background Shapes */}
            <div className="absolute top-[20%] left-[20%] w-48 h-48 bg-blue-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute top-[30%] left-[10%] w-72 h-72 bg-yellow-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-red-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute bottom-[10%] right-[20%] w-48 h-48 bg-purple-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute bottom-[20%] left-[10%] w-56 h-56 bg-green-200 rounded-full opacity-50 z-0"></div>

            {/* Payment Form */}
            <div className="flex-1 flex items-center justify-center px-10">
                <div className="bg-white p-8 max-w-md w-full z-20 mt-10 opacity-80">
                    <h2 className="text-2xl font-bold mb-10">Payment Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-1">Card Number</label>
                            <input
                                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-600"
                                type="text"
                                name="cardNumber"
                                value={paymentData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6 flex space-x-4">
                            <div className="flex-1">
                                <label className="block text-gray-700 mb-1">Expiration Month</label>
                                <input
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-600"
                                    type="number"
                                    name="expirationMonth"
                                    value={paymentData.expirationMonth}
                                    onChange={handleChange}
                                    required
                                    min="1"
                                    max="12"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-700 mb-1">Expiration Year</label>
                                <input
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-600"
                                    type="number"
                                    name="expirationYear"
                                    value={paymentData.expirationYear}
                                    onChange={handleChange}
                                    required
                                    min={new Date().getFullYear()}
                                />
                            </div>
                        </div>
                        <div className="mb-6 relative">
                            <label className="block text-gray-700 mb-1">CVV</label>
                            <input
                                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-600"
                                type={cvvVisible ? 'text' : 'password'}
                                name="cvv"
                                value={paymentData.cvv}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={toggleCvvVisibility}
                            >
                                {cvvVisible ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-600 transition duration-200"
                        >
                            Submit Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentComponent;
