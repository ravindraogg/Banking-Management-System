import React, { useEffect, useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import UserFooter from '../components/UserFooter';
import axios from 'axios';

const AccountDetails = () => {
  const [accountDetails, setAccountDetails] = useState({});
  const accountId = 'your-account-id'; // Replace with actual account ID

  useEffect(() => {
    axios.get(`http://localhost:8080/api/account/${accountId}`)
      .then(response => setAccountDetails(response.data))
      .catch(error => console.error('Error fetching account details:', error));
  }, [accountId]);

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Account Details</h1>
          <div className="bg-white shadow p-4 rounded">
            <p>Account Number: {accountDetails.id}</p>
            <p>Account Type: {accountDetails.accountType}</p>
            <p>Balance: ${accountDetails.balance}</p>
            <p>Status: {accountDetails.status}</p>
          </div>
        </main>
      </div>
      <UserFooter />
    </div>
  );
};

export default AccountDetails;
