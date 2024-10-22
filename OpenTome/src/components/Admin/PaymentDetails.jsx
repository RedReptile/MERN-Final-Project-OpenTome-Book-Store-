
import React, { useState, useEffect } from 'react';
import axios from '../../Config/axiosConfig';
import { FaTimes } from 'react-icons/fa';

const PaymentDetails = ({ isOpen, onClose }) => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchPayments();
    }
  }, [isOpen]);

  const fetchPayments = async () => {
    try {
      const response = await axios.get('/payments');
      setPayments(response.data);
    } catch (error) {
      console.error('Failed to fetch payments:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Payment Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="space-y-4">
          {payments.map(payment => (
            <li key={payment._id} className="bg-white p-4 shadow rounded-md">
              <div><strong>User:</strong> {payment.userName}</div>
              <div><strong>Book:</strong> {payment.bookTitle}</div>
              <div><strong>Price:</strong> NPR {payment.price}</div>
              <div><strong>Created At:</strong> {new Date(payment.createdAt).toLocaleDateString()}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaymentDetails;
