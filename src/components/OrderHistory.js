import React, { useState } from 'react';
import './OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: '2024-10-01',
      items: [
        { name: 'Margherita Pizza', price: 8.99 },
        { name: 'Caesar Salad', price: 6.99 }
      ],
      total: 15.98
    },
    {
      id: 2,
      date: '2024-10-05',
      items: [
        { name: 'Burger', price: 8.99 },
        { name: 'Fries', price: 3.99 },
        { name: 'Coke', price: 1.99 }
      ],
      total: 14.97
    },
    {
      id: 3,
      date: '2024-10-10',
      items: [
        { name: 'Sushi Platter', price: 15.99 },
        { name: 'Green Tea', price: 2.99 }
      ],
      total: 18.98
    }
  ]);

  const clearHistory = () => {
    setOrders([]);
  };

  return (
    <div className="order-history">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No previous orders found.</p>
      ) : (
        <>
          <ul>
            {orders.map(order => (
              <li key={order.id}>
                <h3>Order #{order.id} - {order.date}</h3>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>{item.name}: ${item.price.toFixed(2)}</li>
                  ))}
                </ul>
                <p>Total: ${order.total.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <button onClick={clearHistory} className="clear-history-btn">Clear History</button>
    </div>
  );
};

export default OrderHistory;


// import React from 'react';
// import './OrderHistory.css';

// const OrderHistory = () => {
//   return (
//     <div className="order-history">
//       <h2>Order History</h2>
//       <p>No previous orders found.</p>
//     </div>
//   );
// };

// export default OrderHistory;
