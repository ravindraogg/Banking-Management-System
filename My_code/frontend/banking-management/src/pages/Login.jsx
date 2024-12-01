// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if Admin login
    if (isAdmin) {
      // Hardcoded Admin login credentials
      const adminCredentials = { email: 'admin@bank.com', password: 'admin123' };

      if (
        credentials.email === adminCredentials.email &&
        credentials.password === adminCredentials.password
      ) {
        alert('Admin login successful!');
        navigate('/admin/dashboard');
      } else {
        alert('Invalid Admin credentials');
      }
    } else {
      // For User login, you can integrate with your backend (or mock data here)
      const mockUserData = { email: 'user@bank.com', password: 'user123' };

      if (credentials.email === mockUserData.email && credentials.password === mockUserData.password) {
        alert('User login successful!');
        navigate('/user/dashboard');
      } else {
        alert('Invalid User credentials');
      }
    }
  };

  return (
    <div className=''>
    <div className="p-8 space-y-6 bg-gray-100 rounded-lg shadow-md w-1/3 mx-auto mt-16">
      <h2 className="text-xl font-semibold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={credentials.email}
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
            value={credentials.password}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
            className="mr-2"
          />
          <label>Login as Admin</label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
