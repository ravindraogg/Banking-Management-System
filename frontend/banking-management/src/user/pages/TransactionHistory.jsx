import React, { useEffect, useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import UserFooter from '../components/UserFooter';

// Fetch function to get transactions based on customer ID
const fetchCustomerTransactions = async (customerId) => {
  try {
    const response = await fetch(`https://backend-pluto-banking-d0hkd7hyd3ejhefd.southindia-01.azurewebsites.net/customer/${customerId}/transactions`);
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    const data = await response.json();
    return data; // Assuming the response is a list of transactions
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error; // Propagate error for handling in the component
  }
};

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const customerId = localStorage.getItem('customerId'); // Get the customer ID from localStorage

  useEffect(() => {
    const getTransactions = async () => {
      if (!customerId) {
        console.error('Customer ID not found in localStorage');
        setError('Customer ID not found.');
        setLoading(false);
        return;
      }

      try {
        const transactions = await fetchCustomerTransactions(customerId);
        // Filter only Debit transactions for the current customer
        const filteredTransactions = transactions.filter(
          (txn) => txn.transactionType === 'Debit' && txn.senderCustomerId === customerId
        );

        // Reverse the filtered transactions array before setting it to state
        setTransactions(filteredTransactions.reverse()); // Reverse before setting to state
        setLoading(false);
        console.log("Transactions after filtering and reversing:", filteredTransactions); // Log filtered transactions
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setError('Error fetching transaction data.');
        setLoading(false);
      }
    };

    if (customerId) {
      getTransactions();
    }
  }, [customerId]);

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Transaction History</h1>
          {loading && <p>Loading transactions...</p>}
          {error && <p className="text-red-500">{error}</p>}
          <div className="bg-white shadow p-4 rounded">
            {transactions.length > 0 ? (
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
                  {transactions.map((txn, index) => ( // No need to reverse here since it's already reversed in state
                    <tr key={index}>
                      <td>{new Date(txn.transactionDate).toLocaleString()}</td>
                      <td>{txn.transactionType}</td>
                      <td>₹{txn.amount.toFixed(2)}</td> {/* Changed currency symbol to ₹ */}
                      <td>{txn.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center py-4">No transactions available.</p>
            )}
          </div>
        </main>
      </div>
      <UserFooter />
    </div>
  );
};

export default TransactionHistory;
