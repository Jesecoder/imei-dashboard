// pages/add-funds.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Addfunds from '../components/Addfunds';

const AddFundsPage = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Add Funds</h1>
        <Addfunds />
      </div>
    </div>
  );
};

export default AddFundsPage;

