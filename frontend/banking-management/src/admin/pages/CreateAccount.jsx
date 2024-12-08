import React, { useState } from 'react';
import axios from 'axios';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    customerId: '',
    phone: '',
    address: '',
    balance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/admin/customer', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        },
        withCredentials: true,
      });
      alert('Account created successfully!');
      setFormData({
        name: '',
        customerId: '',
        phone: '',
        address: '',
        balance:'',
      });
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Failed to create account.');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Create Customer Account</h1>
          <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded">
            <label className="block mb-4">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </label>
            <label className="block mb-4">
              Customer ID:
              <input
                type="text"
                name="customerId" 
                value={formData.customerId}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </label>
            <label className="block mb-4">
              Phone:
              <input
                type="text"
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </label>
            <label className="block mb-4">
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </label>
            <label className="block mb-4">
              Initial Balance:
              <input
                type="number"
                name="balance"
                value={formData.balance}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
                min="0"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default CreateAccount;
