import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md p-4 flex justify-between items-center">
 <Link to="/">
      <h1 className="text-2xl font-bold">Pluto Banking</h1></Link>
      
      <Link to="/login">
        <button className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200">
          Login
        </button>
      </Link>
    </header>
  );
};


export default MainHeader
