import { useState } from 'react';

const AddFunds = () => {
  const [amount, setAmount] = useState<number | string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount.toString());
    if (!isNaN(parsedAmount) && parsedAmount >= 5 && parsedAmount <= 500) {
      const totalAmount = parsedAmount + parsedAmount * 0.05;
      alert(`You will be charged $${totalAmount.toFixed(2)} including 5% processing fee.`);
    } else {
      setError('Please enter a valid amount between $5 and $500.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Add Funds</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="$5 - $500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Funds
        </button>
      </form>
    </div>
  );
};

export default AddFunds;

