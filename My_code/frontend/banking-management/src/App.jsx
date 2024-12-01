import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin/pages/AdminDashboard';
import ViewCustomers from './admin/pages/ViewCustomers';
import ManageBranches from './admin/pages/ManageBranches';
import ManageManagers from './admin/pages/ManageManagers';

import UserDashboard from './user/pages/UserDashboard';
import AccountDetails from './user/pages/AccountDetails';
import TransferFunds from './user/pages/TransferFunds';
import TransactionHistory from './user/pages/TransactionHistory';
import LoanApplication from './user/pages/LoanApplication';
import ProfileUpdate from './user/pages/ProfileUpdate';
import UserProfile from './user/pages/UserProfile';
import Logout from './user/pages/Logout';
import './global.css'
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CreateAccount from './admin/pages/CreateAccount';
import AdminLoanApplications from './admin/pages/AdminLoanApplications';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/view-customers" element={<ViewCustomers />} />
        <Route path="/admin/manage-branches" element={<ManageBranches />} />
        <Route path="/admin/manage-managers" element={<ManageManagers />} />
        <Route path="/admin/create-account" element={<CreateAccount />} />
        <Route path="/admin/loan-application" element={<AdminLoanApplications />} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/account-details" element={<AccountDetails />} />
        <Route path="/user/transfer-funds" element={<TransferFunds />} />
        <Route path="/user/transaction-history" element={<TransactionHistory />} />
        <Route path="/user/loan-application" element={<LoanApplication />} />
        <Route path="/user/settings" element={<ProfileUpdate />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path='/login' element={<Login/>}/>
        

        {/* Default Route */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
