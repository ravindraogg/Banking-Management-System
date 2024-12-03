import React from 'react';
import { NavLink } from 'react-router-dom';

const UserSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <nav>
        <h2 className="text-lg font-semibold mb-4">User Navigation</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/user/dashboard"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/account-details"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Account Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/transfer-funds"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Transfer Funds
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/transaction-history"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Transaction History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/loan-application"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Loan Application
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/settings"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default UserSidebar;
