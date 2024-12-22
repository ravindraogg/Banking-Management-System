import React, { useEffect, useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import UserFooter from '../components/UserFooter';
import axios from 'axios';

const UserDashboard = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const customerId = localStorage.getItem('customerId'); // Retrieve customer ID from localStorage

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const accountResponse = await axios.get(`https://backend-pluto-banking-d0hkd7hyd3ejhefd.southindia-01.azurewebsites.net/customer/${customerId}/accounts`);
        const accounts = accountResponse.data;
        
        if (accounts.length > 0) {
          const totalBalance = accounts.reduce((acc, account) => acc + account.balance, 0);
          setBalance(totalBalance);
        }

        const transactionResponse = await axios.get(`http://localhost:8080/customer/${customerId}/transactions`);
        setTransactions(transactionResponse.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch account or transaction data');
        setLoading(false);
      }
    };

    if (customerId) {
      fetchAccountData();
    } else {
      setError('Customer ID not found');
      setLoading(false);
    }
  }, [customerId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  // Reverse transactions array to show the most recent first
  const reversedTransactions = [...transactions].reverse();

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Overview Section */}
            <div className="bg-white shadow p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Account Overview</h2>
              <p className="text-gray-700">Total Balance: <span className="font-bold">₹{balance.toFixed(2)}</span></p>
            </div>

            {/* Recent Transactions Section */}
            <div className="bg-white shadow p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
              {reversedTransactions.length > 0 ? (
                <ul>
                  {reversedTransactions.slice(0, 5).map((txn, index) => {
                    const isDebit = txn.transactionType === 'Debit';
                    return (
                      <li key={index} className="border-b last:border-none py-2 text-sm">
                        <span className="font-medium">{new Date(txn.transactionDate).toLocaleString()}</span> - 
                        <span className={`ml-2 ${isDebit ? 'text-red-500' : 'text-green-500'}`}>
                          {isDebit ? 'Debit' : 'Credit'}
                        </span>: 
                        <span className="ml-2 font-bold">₹{txn.amount.toFixed(2)}</span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-gray-500">No recent transactions found.</p>
              )}
            </div>
          </div>
        </main>
      </div>
      <UserFooter />
    </div>
  );
};

export default UserDashboard;
