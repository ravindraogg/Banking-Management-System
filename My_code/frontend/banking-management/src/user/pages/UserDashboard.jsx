import React, { useEffect, useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import UserFooter from '../components/UserFooter';
import axios from 'axios';

const UserDashboard = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const customerId = 'your-customer-id'; // Replace with actual customer ID

  useEffect(() => {
    axios.get(`http://localhost:8080/customer/${customerId}/accounts`)
      .then(response => {
        const accounts = response.data;
        if (accounts.length > 0) {
          setBalance(accounts[0].balance);
        }
      })
      .catch(error => console.error('Error fetching account data:', error));

    axios.get(`http://localhost:8080/customer/${customerId}/transactions`)
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, [customerId]);

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow p-4 rounded">
              <h2 className="text-lg font-semibold mb-2">Account Overview</h2>
              <p>Total Balance: ${balance}</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
              <ul>
                {transactions.slice(0, 5).map((txn, index) => (
                  <li key={index} className="border-b last:border-none py-1">
                    {txn.date} - {txn.type}: ${txn.amount}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
      <UserFooter />
    </div>
  );
};

export default UserDashboard;
