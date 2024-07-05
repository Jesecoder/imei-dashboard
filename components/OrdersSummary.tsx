// components/OrdersSummary.tsx
import React from 'react';

const OrdersSummary = () => {
  // Esto podría ser cargado desde la base de datos
  const orders = [
    { id: 1, status: 'Success' },
    { id: 2, status: 'Pending' }
  ];

  return (
    <div>
      <h2>Recent Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>Order ID: {order.id}, Status: {order.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersSummary;
