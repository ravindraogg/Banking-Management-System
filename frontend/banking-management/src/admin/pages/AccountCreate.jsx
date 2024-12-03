// src/admin/pages/AccountCreate.jsx
import React, { useState } from 'react';

const AccountCreate = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    accountType: 'Savings',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can send the data to the backend to save it in the database
    console.log('Creating user account:', userData);
    alert('Account created successfully!');
    // Reset form
    setUserData({
      name: '',
      email: '',
      password: '',
      accountType: 'Savings',
    });
  };

  return (
    <div className="p-8 space-y-6 bg-gray-100 rounded-lg shadow-md w-1/3 mx-auto mt-16">
      <h2 className="text-xl font-semibold text-center">Create New User Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="accountType" className="block text-sm font-medium">Account Type</label>
          <select
            name="accountType"
            id="accountType"
            value={userData.accountType}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Savings">Savings</option>
            <option value="Checking">Checking</option>
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountCreate;
