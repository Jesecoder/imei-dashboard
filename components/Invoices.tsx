// components/Invoices.tsx
import React from 'react';

const invoices = [
  { id: 188585, amount: 5.00, status: 'PAID', created: '2024-06-24T22:47:47.000000Z', orderBy: 'USER_STRIPE' },
  { id: 179790, amount: 5.00, status: 'PAID', created: '2024-05-26T23:45:26.000000Z', orderBy: 'USER_STRIPE' },
  { id: 171748, amount: 5.00, status: 'PAID', created: '2024-04-20T22:20:49.000000Z', orderBy: 'USER_STRIPE' },
  // Agrega más facturas aquí
];

const Invoices: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <button className="bg-purple-500 text-white p-2 rounded-lg">Export</button>
        <input
          type="text"
          placeholder="Search"
          className="ml-4 p-2 border rounded-lg flex-1"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="py-2 px-4 text-left border-r border-gray-200">ID</th>
              <th className="py-2 px-4 text-left border-r border-gray-200">Amount</th>
              <th className="py-2 px-4 text-left border-r border-gray-200">Status</th>
              <th className="py-2 px-4 text-left border-r border-gray-200">Created</th>
              <th className="py-2 px-4 text-left">Order By</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-gray-200">
                <td className="py-2 px-4 border-r border-gray-200 text-center">{invoice.id}</td>
                <td className="py-2 px-4 border-r border-gray-200 text-center">{invoice.amount.toFixed(2)}</td>
                <td className="py-2 px-4 border-r border-gray-200 text-center">
                  <span className={`px-2 py-1 rounded-full ${invoice.status === 'PAID' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-r border-gray-200 text-center">{invoice.created}</td>
                <td className="py-2 px-4 text-center">{invoice.orderBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
