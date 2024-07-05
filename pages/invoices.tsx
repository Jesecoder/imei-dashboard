// pages/invoices.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Invoices from '../components/Invoices';

const InvoicesPage = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Invoices</h1>
        <Invoices />
      </div>
    </div>
  );
};

export default InvoicesPage;
