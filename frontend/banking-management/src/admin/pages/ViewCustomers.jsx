import React, { useEffect, useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';

const ViewCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const response = await fetch('http://localhost:8080/customer/customers');
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    getCustomers();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h2 className="text-3xl font-bold mb-4">View Customers</h2>
          <table className="w-full bg-white shadow rounded">
            <thead>
              <tr>
                <th className="border p-3">ID</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3">Address</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id}>
                  <td className="border p-3">{customer.id}</td>
                  <td className="border p-3">{customer.firstName} {customer.lastName}</td>
                  <td className="border p-3">{customer.email}</td>
                  <td className="border p-3">{customer.phone}</td>
                  <td className="border p-3">{customer.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default ViewCustomers;
