import React, { useEffect, useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import UserFooter from '../components/UserFooter';
import axios from 'axios';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const customerId = 'your-customer-id'; // Replace with actual customer ID

  useEffect(() => {
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
          <h1 className="text-3xl font-bold mb-4">Transaction History</h1>
          <div className="bg-white shadow p-4 rounded">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Date</th>
                  <th className="text-left">Type</th>
                  <th className="text-left">Amount</th>
                  <th className="text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={index}>
                    <td>{txn.transactionDate}</td>
                    <td>{txn.transactionType}</td>
                    <td>${txn.amount}</td>
                    <td>{txn.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <UserFooter />
    </div>
  );
};

export default TransactionHistory;
