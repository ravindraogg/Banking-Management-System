import React, { useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import UserFooter from '../components/UserFooter';

// API function for fund transfer between customers
const transferFundsToAnotherCustomer = async (senderCustomerId, transactionData) => {
  const apiUrl = `https://pluto-banking-backend.onrender.com/${senderCustomerId}/transaction`; // Fixed variable name

  const payload = {
    senderCustomerId,
    recipientCustomerId: transactionData.recipientId, // Customer ID of the recipient
    amount: parseFloat(transactionData.amount), // Amount (ensure it's a valid number)
    transactionType: transactionData.transactionType, // "Debit" for sender or "Credit" for recipient
    transactionDate: new Date().toISOString(), // Current timestamp
    description: transactionData.description, // Description of the transaction
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to transfer funds');
  }

  return await response.json(); // Assuming the API returns the updated transaction details
};

const TransferFunds = () => {
  const [formData, setFormData] = useState({
    recipientId: '', // Recipient customer ID
    amount: '', // Amount to transfer
    transactionType: 'Debit', // Default type: Debit
    description: '', // Description of the transaction
  });

  // Retrieve senderCustomerId from localStorage
  const senderCustomerId = localStorage.getItem('customerId'); // Use customerId from localStorage

  if (!senderCustomerId) {
    alert('Sender customer ID not found. Please log in first.');
    return; // Handle missing sender customer ID
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transactionData = {
      ...formData,
      senderCustomerId,
      transactionDate: new Date().toISOString(),
    };

    try {
      const response = await transferFundsToAnotherCustomer(senderCustomerId, transactionData);
      alert('Funds Transferred Successfully!');
      console.log('Transaction Response:', response);
      setFormData({
        recipientId: '',
        amount: '',
        transactionType: 'Debit',
        description: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert(`Failed to transfer funds: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Transfer Funds to Another Customer</h1>
          <form className="bg-white shadow p-6 rounded" onSubmit={handleSubmit}>
            <label className="block mb-4">
              Recipient's Customer ID or Email:
              <input
                type="text"
                name="recipientId"
                value={formData.recipientId}
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
              Transaction Type:
              <select
                name="transactionType"
                value={formData.transactionType}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="Debit">Debit</option>
                <option value="Credit">Credit</option>
              </select>
            </label>
            <label className="block mb-4">
              Description:
              <textarea
                name="description"
                value={formData.description}
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
