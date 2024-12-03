import React, { useState, useEffect } from 'react';
import { fetchUserProfile, updateUserProfile } from '../api';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    fullName: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userProfile = await fetchUserProfile('your-user-id'); 
        setUserData(userProfile);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    getUserProfile();
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await updateUserProfile(userData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">User Profile</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            value={userData.fullName}
            onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            value={userData.phone}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            value={userData.address}
            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
