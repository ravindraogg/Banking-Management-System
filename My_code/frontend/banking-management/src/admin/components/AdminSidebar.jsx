import React from 'react';
import { NavLink } from 'react-router-dom';
import CreateAccount from "../pages/CreateAccount"

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <nav>
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/admin/dashboard"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/view-customers"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              View Customers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/manage-branches"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Manage Branches
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/manage-managers"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Manage Managers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/create-account"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Create User Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/loan-application"
              className="block p-2 rounded hover:bg-blue-700"
              activeClassName="bg-blue-700"
            >
              Loan Application
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
