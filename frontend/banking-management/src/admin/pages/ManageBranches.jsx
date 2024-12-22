import React, { useState, useEffect } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';
import axios from 'axios';

const ManageBranches = () => {
  const [branches, setBranches] = useState([]);
  const [branchName, setBranchName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get('https://pluto-banking-backend.onrender.com/api/admin/branches')
      .then(response => {
        setBranches(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching branches.');
        setLoading(false);
      });
  }, []);

  const addBranch = () => {
    if (branchName) {
      const newBranch = { name: branchName };
      setBranches([...branches, newBranch]);
      setBranchName('');
            axios.post('https://pluto-banking-backend.onrender.com/api/admin/add', newBranch)
        .then(response => {
          setError('');
        })
        .catch(error => {
          setBranches(branches.filter(branch => branch.name !== branchName));
          setError('Error adding branch.');
        });
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h2 className="text-3xl font-bold mb-4">Manage Branches</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}

          <div className="bg-white p-6 shadow rounded mb-6">
            <input
              type="text"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              placeholder="Enter branch name"
              className="border p-2 rounded w-full mb-3"
            />
            <button
              onClick={addBranch}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {loading ? 'Adding...' : 'Add Branch'}
            </button>
          </div>
          <h3 className="text-xl font-bold mb-4">Branch List</h3>
          <ul className="bg-white shadow rounded p-4">
            {loading ? (
              <li>Loading branches...</li>
            ) : (
              branches.map((branch, index) => (
                <li key={index} className="p-2 border-b last:border-none">
                  {branch.name}
                </li>
              ))
            )}
          </ul>
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default ManageBranches;
