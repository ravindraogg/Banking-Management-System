import React, { useState } from 'react';
import axios from 'axios';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accountType: '',
    balance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/admin/customer', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        },
        withCredentials: true,
      });
      alert('Account created successfully!');
      setFormData({
        name: '',
        email: '',
        accountType: '',
        balance: '',
      });
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Failed to create account.');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Create User Account</h1>
          <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded">
            <label className="block mb-4">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </label>
            <label className="block mb-4">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </label>
            <label className="block mb-4">
              Account Type:
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              >
                <option value="">Select Account Type</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
              </select>
            </label>
            <label className="block mb-4">
              Initial Balance:
              <input
                type="number"
                name="balance"
                value={formData.balance}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
                min="0"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default CreateAccount;

// import React, { useState } from 'react';
// import { createCustomer } from '../api.js';
// import AdminHeader from '../components/AdminHeader';
// import AdminSidebar from '../components/AdminSidebar';
// import AdminFooter from '../components/AdminFooter';

// const CreateAccount = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     accountType: '',
//     balance: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await createCustomer(formData);
//       alert('Account created successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         accountType: '',
//         balance: ''
//       });
//     } catch (error) {
//       console.error('Error creating account:', error);
//       alert('Failed to create account.');
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <AdminHeader />
//       <div className="flex flex-1">
//         <AdminSidebar />
//         <main className="flex-1 bg-gray-100 p-6">
//           <h1 className="text-3xl font-bold mb-4">Create User Account</h1>
//           <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded">
//             <label className="block mb-4">
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 p-2 border rounded w-full"
//                 required
//               />
//             </label>
//             <label className="block mb-4">
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 p-2 border rounded w-full"
//                 required
//               />
//             </label>
//             <label className="block mb-4">
//               Account Type:
//               <select
//                 name="accountType"
//                 value={formData.accountType}
//                 onChange={handleChange}
//                 className="mt-1 p-2 border rounded w-full"
//                 required
//               >
//                 <option value="">Select Account Type</option>
//                 <option value="Savings">Savings</option>
//                 <option value="Current">Current</option>
//               </select>
//             </label>
//             <label className="block mb-4">
//               Initial Balance:
//               <input
//                 type="number"
//                 name="balance"
//                 value={formData.balance}
//                 onChange={handleChange}
//                 className="mt-1 p-2 border rounded w-full"
//                 required
//                 min="0"
//               />
//             </label>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//             >
//               Create Account
//             </button>
//           </form>
//         </main>
//       </div>
//       <AdminFooter />
//     </div>
//   );
// };

// export default CreateAccount;
