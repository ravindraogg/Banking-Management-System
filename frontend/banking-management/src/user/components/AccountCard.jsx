import React from 'react';

const AccountCard = ({ balance, accountType, accountNumber }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-8 max-w-xs w-full mx-auto transform transition-all hover:scale-105 duration-300 ease-in-out">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Account Overview</h2>
        <div className="text-sm text-gray-200">{accountNumber}</div>
      </div>

      {/* Account Details */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-lg font-medium">Account Type:</span>
          <span className="text-lg font-light">{accountType}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-lg font-medium">Balance:</span>
          <span className="text-2xl font-semibold">${balance}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-x-4 flex justify-center">
        <button className="bg-white text-blue-500 py-2 px-4 rounded-full text-sm font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-200">
          View Details
        </button>
        <button className="bg-transparent border-2 border-white py-2 px-4 rounded-full text-sm font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:border-gray-200 hover:text-gray-200">
          Transfer Funds
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
