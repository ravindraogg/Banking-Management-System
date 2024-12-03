import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Admin Portal</h1>
      
      <Link to="/logout">
        <button className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200">
          Logout
        </button>
      </Link>
    </header>
  );
};

export default AdminHeader;
