// components/AddFunds.tsx
import React, { useState } from 'react';

const Addfunds: React.FC = () => {
  const [amount, setAmount] = useState<number | string>('');
  const [error, setError] = useState<string>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setAmount('');
      setError('Please enter a valid number.');
    } else if (value < 5 || value > 500) {
      setAmount(value);
      setError('Amount must be between $5 and $500.');
    } else {
      setAmount(value);
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!error && amount >= 5 && amount <= 500) {
      const totalAmount = amount + amount * 0.05;
      alert(`You will be charged $${totalAmount.toFixed(2)} including 5% processing fee.`);
      // Aquí puedes manejar la lógica de pago
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Deposit</h2>
      <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
        REVOLUT instant payment now available!
      </div>
      <div className="text-center text-xl font-bold mb-4">Balance: 3.56$</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Payment Method</label>
          <select className="w-full p-2 border rounded-lg">
            <option value="stripe">Stripe (Visa / Master Card) (instant)</option>
            {/* Añadir más métodos de pago aquí si es necesario */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount (5$ - 500$)</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg"
            value={amount}
            onChange={handleAmountChange}
            min="5"
            max="500"
            step="0.01"
            placeholder="Enter Amount 5$ - 500$"
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <p className="mb-4">Note: you will pay 5% processing fee</p>
        <button
          type="submit"
          className="w-full p-2 bg-purple-500 text-white rounded-lg"
          disabled={!!error || !amount}
        >
          Add Funds
        </button>
      </form>
      <p className="mt-4 text-gray-700">
        We recommend you to use REVOLUT instant payment, with only 2% fee
      </p>
      <p className="mt-2 text-gray-700">
        If you need invoice, please contact us after payment. (Otherwise we will create the invoice to Stripe)
      </p>
    </div>
  );
};

export default Addfunds;
