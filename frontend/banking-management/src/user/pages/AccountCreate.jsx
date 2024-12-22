import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const AccountCreate = () => {
  const [userData, setUserData] = useState({
    customerId: '',
    email: '',
    password: '',
    accountType: 'Savings',
    status: 'Active',
  });
  const [isCustomerIdValid, setIsCustomerIdValid] = useState(null);
  const [validationMessage, setValidationMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    // Reset validation if customerId changes
    if (name === 'customerId') {
      setValidationMessage('');
      setIsCustomerIdValid(null);
    }
  };

  const validateCustomerId = async () => {
    try {
      const response = await axios.get(`https://backend-pluto-banking-d0hkd7hyd3ejhefd.southindia-01.azurewebsites.net/customer/${userData.customerId}`);
      if (response.status === 200 && response.data) {
        setIsCustomerIdValid(true);
        setValidationMessage('Customer ID is valid.');
      } else {
        throw new Error('Invalid customer ID');
      }
    } catch (error) {
      setIsCustomerIdValid(false);
      setValidationMessage('Customer ID not found. Please contact admin.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure customer ID validation is complete
    if (isCustomerIdValid === null) {
      alert('Please validate Customer ID before submitting.');
      return;
    }

    if (!isCustomerIdValid) {
      alert('Cannot create account. Invalid customer ID.');
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post('https://pluto-banking-backend.onrender.com/api/admin/customer', userData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        },
        withCredentials: true,
      });
      alert('Account created successfully!');
      
      // Redirect to login page after successful creation
      navigate('/login'); // Change "/login" to the actual route for your login page
    } catch (error) {
      console.error('Error creating account:', error);
      if (error.response) {
        alert(`Failed to create account: ${error.response.data.message || 'Server error'}`);
      } else {
        alert('Failed to create account. Please check your network connection.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 space-y-6 bg-gray-100 rounded-lg shadow-md w-1/3 mx-auto mt-16">
      <h2 className="text-xl font-semibold text-center">Create New User Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="customerId" className="block text-sm font-medium">Customer ID</label>
          <input
            type="text"
            name="customerId"
            id="customerId"
            value={userData.customerId}
            onChange={handleInputChange}
            onBlur={validateCustomerId} // Validate customer ID on blur
            required
            className="w-full p-2 border rounded-md"
          />
          {validationMessage && (
            <p className={`text-sm ${isCustomerIdValid ? 'text-green-500' : 'text-red-500'}`}>
              {validationMessage}
            </p>
          )}
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
            <option value="Checking">Current</option>
          </select>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium">Account Status</label>
          <select
            name="status"
            id="status"
            value={userData.status}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Active">Active</option>
            <option value="Deactive">Deactive</option>
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 ${isSubmitting ? 'bg-gray-500' : 'bg-blue-600'} text-white rounded-md hover:bg-blue-700`}
          >
            {isSubmitting ? 'Submitting...' : 'Create Account'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountCreate;
