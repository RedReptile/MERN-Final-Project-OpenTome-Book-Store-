import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const userId = JSON.parse(localStorage.getItem('user'))._id; // Fetch the user ID from local storage

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/orders/user/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setOrders(data); // Store the list of orders
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Order History</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="mb-6">
              <ul>
                {order.books.map((book) => (
                  <li key={book._id} className="ml-4 mt-1">
                    <div className="text-gray-700">{book.title}</div>
                    <div className="text-gray-500">{book.category}</div>
                    <div className="text-gray-500">{book.price}</div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
