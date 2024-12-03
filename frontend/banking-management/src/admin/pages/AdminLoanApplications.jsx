import React, { useEffect, useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';
import axios from 'axios';

const AdminLoanApplications = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/loan/')
      .then(response => setLoans(response.data))
      .catch(error => console.error('Error fetching loans:', error));
  }, []);

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
                  <th className="px-4 py-2 border">Loan Type</th>
                  <th className="px-4 py-2 border">Amount</th>
                  <th className="px-4 py-2 border">Interest Rate</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Start Date</th>
                  <th className="px-4 py-2 border">End Date</th>
                </tr>
              </thead>
              <tbody>
                {loans.map(loan => (
                  <tr key={loan.id}>
                    <td className="px-4 py-2 border">{loan.loanType}</td>
                    <td className="px-4 py-2 border">{loan.amount}</td>
                    <td className="px-4 py-2 border">{loan.interestRate}</td>
                    <td className="px-4 py-2 border">{loan.status}</td>
                    <td className="px-4 py-2 border">{loan.startDate}</td>
                    <td className="px-4 py-2 border">{loan.endDate}</td>
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
