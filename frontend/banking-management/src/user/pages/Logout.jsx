import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulating user logout by clearing session or token
    localStorage.removeItem('userToken'); // Example, replace with actual token/session management

    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Are you sure you want to log out?</h2>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-700"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Logout;
