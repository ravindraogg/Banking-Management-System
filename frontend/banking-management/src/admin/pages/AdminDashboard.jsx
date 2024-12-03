// import React from 'react';
// import AdminHeader from '../components/AdminHeader';
// import AdminSidebar from '../components/AdminSidebar';
// import AdminFooter from '../components/AdminFooter';

// const AdminDashboard = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <AdminHeader />
//       <div className="flex flex-1">
//         <AdminSidebar />
//         <main className="flex-1 bg-gray-100 p-6">
//           <h2 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
//           <div className="grid grid-cols-3 gap-6">
//             <div className="bg-white p-4 shadow rounded text-center">
//               <h3 className="text-lg font-semibold">Total Customers</h3>
//               <p className="text-2xl font-bold text-blue-600">120</p>
//             </div>
//             <div className="bg-white p-4 shadow rounded text-center">
//               <h3 className="text-lg font-semibold">Total Branches</h3>
//               <p className="text-2xl font-bold text-green-600">15</p>
//             </div>
//             <div className="bg-white p-4 shadow rounded text-center">
//               <h3 className="text-lg font-semibold">Total Managers</h3>
//               <p className="text-2xl font-bold text-red-600">25</p>
//             </div>
//           </div>
//         </main>
//       </div>
//       <AdminFooter />
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState } from 'react';
import { fetchCustomerCount, fetchBranchCount, fetchManagerCount } from '../api.js';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';

const AdminDashboard = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [branchCount, setBranchCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const customerCount = await fetchCustomerCount();
        setCustomerCount(customerCount);

        const branchCount = await fetchBranchCount();
        setBranchCount(branchCount);

        const managerCount = await fetchManagerCount();
        setManagerCount(managerCount);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow rounded text-center">
              <h3 className="text-xl font-semibold">Total Customers</h3>
              <p className="text-4xl font-bold text-blue-600">{customerCount}</p>
            </div>
            <div className="bg-white p-6 shadow rounded text-center">
              <h3 className="text-xl font-semibold">Total Branches</h3>
              <p className="text-4xl font-bold text-green-600">{branchCount}</p>
            </div>
            <div className="bg-white p-6 shadow rounded text-center">
              <h3 className="text-xl font-semibold">Total Managers</h3>
              <p className="text-4xl font-bold text-red-600">{managerCount}</p>
            </div>
          </div>
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminDashboard;
