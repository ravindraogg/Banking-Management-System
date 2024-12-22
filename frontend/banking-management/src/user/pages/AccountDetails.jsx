import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../pages/header';

const AccountDetails = () => {
  const customerId = localStorage.getItem('customerId'); // Retrieve customer ID
  const [state, setState] = useState({
    accounts: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (customerId) {
      axios
        .get(`https://pluto-banking-backend.onrender.com/customer/${customerId}/accounts`)
        .then((response) => {
          const accountData = Array.isArray(response.data) ? response.data : [response.data];
          setState({ accounts: accountData, loading: false, error: null });
        })
        .catch((error) => {
          console.error('Error fetching account details:', error);
          setState({ accounts: [], loading: false, error: 'Failed to fetch account details' });
        });
    } else {
      setState({ accounts: [], loading: false, error: 'No customer ID found in localStorage' });
    }
  }, [customerId]);

  const { accounts, loading, error } = state;

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
        <div className="text-lg font-semibold text-red-500">{error}</div>
      </div>
    );
  }

  const renderAccountTypeDetails = (account) => {
    if (account.accountType === 'Savings') {
      return (
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-lg">Interest Rate:</span>
            <span>{account.interestRate || 'Not Available'}%</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg">Minimum Balance:</span>
            <span>{account.minimumBalance ? `₹${account.minimumBalance}` : 'Not Available'}</span>
          </div>
        </div>
      );
    } else if (account.accountType === 'Current') {
      return (
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-lg">Overdraft Limit:</span>
            <span>{account.overdraftLimit ? `₹${account.overdraftLimit}` : 'Not Available'}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg">Transaction Fees:</span>
            <span>{account.transactionFees ? `₹${account.transactionFees}` : 'Not Available'}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
    <Header></Header>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h1 className="text-3xl font-bold mb-6">Account Details</h1>
        <div className="text-lg font-medium mb-6">
          <span className="text-gray-600">Customer ID:</span> <span className="text-blue-500">{customerId}</span>
        </div>

        {accounts.length > 0 ? (
          accounts.map((account) => (
            <div
              key={account.id}
              className="space-y-8 mb-8 p-4 hover:shadow-xl border rounded-lg transition-all duration-300"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium text-lg">Account Number:</div>
                <div>{account.id}</div>
                <div className="font-medium text-lg">Account Type:</div>
                <div>{account.accountType}</div>
                <div className="font-medium text-lg">Balance:</div>
                <div>₹{account.balance}</div>
                <div className="font-medium text-lg">Status:</div>
                <div>{account.status}</div>
              </div>
              {renderAccountTypeDetails(account)}
            </div>
          ))
        ) : (
          <div className="text-lg font-semibold text-red-500">No accounts found for this customer.</div>
        )}
      </div>
    </>
  );
};

export default AccountDetails;
