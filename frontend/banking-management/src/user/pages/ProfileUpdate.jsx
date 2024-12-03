import React, { useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import UserFooter from '../components/UserFooter';

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile Updated Successfully!');
    // Optionally, send the updated data to an API for backend processing
  };

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Update Your Profile</h1>
          <form className="bg-white shadow p-6 rounded" onSubmit={handleSubmit}>
            <label className="block mb-4">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter your full name"
                required
              />
            </label>

            <label className="block mb-4">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter your email"
                required
              />
            </label>

            <label className="block mb-4">
              Phone Number:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter your phone number"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Update Profile
            </button>
          </form>
        </main>
      </div>
      <UserFooter />
    </div>
  );
};

export default ProfileUpdate;
