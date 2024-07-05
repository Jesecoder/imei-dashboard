// components/OrderHistory.tsx
import React from 'react';

const orders = [
  {
    id: 38558941,
    status: 'SUCCESS',
    service: 'SAMSUNG INFO & KNOX STATUS (S2)',
    imei: '351751104432599',
    result: `
      Search Term: 351751104432599\n
      IMEI1: 351751104432599\n
      MEID: 35175110443259\n
      KG Message 1: No records are associated with this device, and it does not fall under Samsung Knox Guard late payment policy.
    `,
    submitted: '2024-07-03 20:04:17',
    credit: 0.17,
  },
  // Agrega más órdenes aquí
];

const OrderHistory: React.FC = () => {
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
              <th className="py-2 px-4 text-left border-r border-gray-200">Status</th>
              <th className="py-2 px-4 text-left border-r border-gray-200">Service</th>
              <th className="py-2 px-4 text-left border-r border-gray-200">IMEI</th>
              <th className="py-2 px-4 text-left border-r border-gray-200">Result</th>
              <th className="py-2 px-4 text-left border-r border-gray-200">Submitted</th>
              <th className="py-2 px-4 text-left">Credit</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200">
                <td className="py-2 px-4 border-r border-gray-200 text-center">{order.id}</td>
                <td className={`py-2 px-4 border-r border-gray-200 text-center ${order.status === 'SUCCESS' ? 'text-green-500' : 'text-red-500'}`}>
                  {order.status}
                </td>
                <td className="py-2 px-4 border-r border-gray-200 text-center">{order.service}</td>
                <td className="py-2 px-4 border-r border-gray-200 text-center">{order.imei}</td>
                <td className="py-2 px-4 border-r border-gray-200 text-left whitespace-pre-line">{order.result}</td>
                <td className="py-2 px-4 border-r border-gray-200 text-center">{order.submitted}</td>
                <td className="py-2 px-4 text-center">{order.credit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;