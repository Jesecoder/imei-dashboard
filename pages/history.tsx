// pages/order-history.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import OrderHistory from '../components/OrderHistory';

const OrderHistoryPage = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Order History</h1>
        <OrderHistory />
      </div>
    </div>
  );
};

export default OrderHistoryPage;
