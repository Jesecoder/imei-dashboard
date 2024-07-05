// pages/imei-check.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import IMEICheckForm from '../components/IMEICheckForm';

const IMEICheckPage = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">IMEI Check</h1>
        <IMEICheckForm />
      </div>
    </div>
  );
};

export default IMEICheckPage;

