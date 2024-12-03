import React, { useState } from 'react';
import { transferFunds } from '../api'; // Assuming this function is in api.js
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import UserFooter from '../components/UserFooter';

const TransferFunds = () => {
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
    note: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customerId = 'your-customer-id'; // Replace with actual customer ID

    try {
      await transferFunds(customerId, formData);
      alert('Funds Transferred!');
      setFormData({
        recipient: '',
        amount: '',
        note: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to transfer funds!');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Transfer Funds</h1>
          <form className="bg-white shadow p-6 rounded" onSubmit={handleSubmit}>
            <label className="block mb-4">
              Recipient Account Number:
              <input
                type="text"
                name="recipient"
                value={formData.recipient}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </label>
            <label className="block mb-4">
              Amount:
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                required
                min="1"
              />
            </label>
            <label className="block mb-4">
              Note:
              <textarea
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Transfer
            </button>
          </form>
        </main>
      </div>
      <UserFooter />
    </div>
  );
};

export default TransferFunds;
