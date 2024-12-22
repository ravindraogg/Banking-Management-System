import React, { useEffect, useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';
import axios from 'axios';

const AdminLoanApplications = () => {
  const [loans, setLoans] = useState([]);

  // Fetch loans on component load
  useEffect(() => {
    axios
      .get('https://backend-pluto-banking-d0hkd7hyd3ejhefd.southindia-01.azurewebsites.net/loan/')
      .then(response => {
        // Reverse the loans for FILO display
        setLoans(response.data.reverse());
      })
      .catch(error => console.error('Error fetching loans:', error));
  }, []);

  // Handle status update (Accept/Reject)
  const handleUpdateStatus = (loanId, status) => {
    axios
      .put(`https://pluto-banking-backend.onrender.com/loan/${loanId}/status`, null, { params: { status } })
      .then(() => {
        setLoans(prevLoans =>
          prevLoans.map(loan =>
            loan.id === loanId ? { ...loan, status } : loan
          )
        );
      })
      .catch(error => console.error('Error updating status:', error));
  };

  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Loan Applications</h1>
          <div className="bg-white shadow p-6 rounded">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Customer ID</th>
                  <th className="px-4 py-2 border">Loan Type</th>
                  <th className="px-4 py-2 border">Amount</th>
                  <th className="px-4 py-2 border">Interest Rate</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Start Date</th>
                  <th className="px-4 py-2 border">End Date</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loans.map(loan => (
                  <tr key={loan.id}>
                    <td className="px-4 py-2 border">{loan.customerId}</td>
                    <td className="px-4 py-2 border">{loan.loanType}</td>
                    <td className="px-4 py-2 border">{loan.amount}</td>
                    <td className="px-4 py-2 border">{loan.interestRate}</td>
                    <td className="px-4 py-2 border">{loan.status}</td>
                    <td className="px-4 py-2 border">{loan.startDate}</td>
                    <td className="px-4 py-2 border">{loan.endDate}</td>
                    <td className="px-4 py-2 border text-center">
                      {loan.status === 'Pending' ? (
                        <div className="flex justify-center gap-2">
                          <button
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            onClick={() => handleUpdateStatus(loan.id, 'Approved')}
                          >
                            Accept
                          </button>
                          <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => handleUpdateStatus(loan.id, 'Rejected')}
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span
                          className={`px-4 py-2 rounded ${
                            loan.status === 'Approved'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {loan.status}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminLoanApplications;
