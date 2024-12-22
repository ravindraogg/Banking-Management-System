import React, { useState, useEffect } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import UserFooter from '../components/UserFooter';
import axios from 'axios';

const LoanApplication = () => {
  const [formData, setFormData] = useState({
    customerId: '', // Add customer ID field
    loanType: '',
    amount: '',
    interestRate: '',
    status: 'Pending', // Default to "Pending"
    startDate: '',
    endDate: '',
  });

  // Fetch customer ID from localStorage when the component mounts
  useEffect(() => {
    const customerId = localStorage.getItem('customerId'); // Fetch customerId from localStorage
    if (customerId) {
      setFormData(prevFormData => ({
        ...prevFormData,
        customerId,
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting loan application:', formData); // Debugging statement

    axios
      .post('https://pluto-banking-backend.onrender.com/loan/', formData)
      .then(response => {
        console.log('Response from server:', response); // Debugging statement
        alert('Loan Application Submitted!');
        // Optionally reset the form after successful submission
        setFormData({
          customerId: localStorage.getItem('customerid'), // Keep customerId pre-filled
          loanType: '',
          amount: '',
          interestRate: '',
          status: 'Pending',
          startDate: '',
          endDate: '',
        });
      })
      .catch(error => {
        console.error('Error:', error); // Debugging statement
        alert('Failed to submit loan application!');
      });
  };

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Loan Application</h1>
          <form className="bg-white shadow p-6 rounded" onSubmit={handleSubmit}>
            <label className="block mb-4">
              Customer ID:
              <input
                type="text"
                name="customerId"
                value={formData.customerId}
                className="mt-1 p-2 border rounded w-full"
                readOnly // Make this field read-only
              />
            </label>
            <label className="block mb-4">
              Loan Type:
              <input
                type="text"
                name="loanType"
                value={formData.loanType}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </label>
            <label className="block mb-4">
              Loan Amount:
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
              Interest Rate:
              <input
                type="number"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                required
                step="0.01"
                min="0"
              />
            </label>
            <label className="block mb-4">
              Loan Status:
              <input
                type="text"
                name="status"
                value={formData.status}
                className="mt-1 p-2 border rounded w-full"
                readOnly // Make this field read-only since it's set to "Pending"
              />
            </label>
            <label className="block mb-4">
              Start Date:
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </label>
            <label className="block mb-4">
              End Date:
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Apply
            </button>
          </form>
        </main>
      </div>
      <UserFooter />
    </div>
  );
};

export default LoanApplication;
