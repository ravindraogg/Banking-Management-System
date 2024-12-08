import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pluto Banking</h1>
        <nav>
          <Link
            to="/user/dashboard"
            className="px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/user/profile"
            className="px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Profile
          </Link>
          <Link
            to="/logout"
            className="px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default UserHeader;
