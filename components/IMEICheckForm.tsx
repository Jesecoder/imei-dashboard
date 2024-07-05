// components/IMEICheckForm.tsx
import React, { useState, useEffect } from 'react';
import { isValidIMEI } from '../utils/validateIMEI';

const IMEICheckForm = () => {
  const [imei, setIMEI] = useState('');
  const [service, setService] = useState('');
  const [isBulk, setIsBulk] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const imeis = imei.split('\n').filter(Boolean); // Split for bulk entries
    const allValid = imeis.every((imei) => imei.length === 15 && isValidIMEI(imei));
    if (imei.length > 0 && imei.length !== 15) {
      setMessage('');
    } else if (imei.length === 15 && !isValidIMEI(imei)) {
      setMessage('Invalid IMEI');
    } else if (imei.length === 15 && isValidIMEI(imei)) {
      setMessage('Valid IMEI');
    } else {
      setMessage('');
    }
  }, [imei]);

  const handleIMEIChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIMEI(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message !== 'Valid IMEI') return;

    // Aquí puedes manejar el envío del formulario
    console.log({ imei, service, isBulk });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <button
          onClick={() => setIsBulk(false)}
          className={`mr-4 p-2 ${!isBulk ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg`}
        >
          Order
        </button>
        <button
          onClick={() => setIsBulk(true)}
          className={`p-2 ${isBulk ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg`}
        >
          Bulk
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">IMEI/Serial</label>
          {isBulk ? (
            <textarea
              className="w-full p-2 border rounded-lg"
              rows={4}
              placeholder="Enter IMEI/Serial"
              value={imei}
              onChange={handleIMEIChange}
            />
          ) : (
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter IMEI/Serial"
              value={imei}
              onChange={handleIMEIChange}
            />
          )}
          {message && <p className={`text-${message === 'Valid IMEI' ? 'green' : 'red'}-500`}>{message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Select Services</label>
          <select
            className="w-full p-2 border rounded-lg"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Services</option>
            {/* Añade aquí las opciones de servicios */}
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
          </select>
        </div>
        <button type="submit" className={`w-full p-2 rounded-lg ${message === 'Valid IMEI' ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} disabled={message !== 'Valid IMEI'}>
          Check
        </button>
      </form>
    </div>
  );
};

export default IMEICheckForm;

