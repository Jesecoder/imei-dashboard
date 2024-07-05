// components/Sidebar.tsx
import React, { useState } from 'react';
import { FaHome, FaDollarSign, FaListAlt, FaHistory, FaFileInvoice, FaBars } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:flex lg:flex-col lg:h-screen bg-gray-800 text-white">
      <div className="flex items-center justify-between p-4 bg-gray-900 lg:hidden">
        <div className="text-xl font-bold">IMEI Checker</div>
        <button onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <nav className={`p-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <ul>
          <li className="mb-4">
            <Link href="/">
              <span className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaHome className="mr-2" /> Home
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/add-funds">
              <span className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaDollarSign className="mr-2" /> Add Funds
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/orders">
              <span className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaListAlt className="mr-2" /> Place Order
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/history">
              <span className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaHistory className="mr-2" /> Order History
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/invoices">
              <span className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaFileInvoice className="mr-2" /> Invoices
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;




