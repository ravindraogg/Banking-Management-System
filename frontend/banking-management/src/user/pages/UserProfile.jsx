import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the user data on component mount
  useEffect(() => {
    const customerId = localStorage.getItem('customerId');
    if (!customerId) {
      setError('No customer ID found. Please log in.');
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://pluto-banking-backend.onrender.com/customer/${customerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();
        console.log('Fetched user data:', data);
        setUserData({
          fullName: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          address: data.address,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">User Profile</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            value={userData.fullName}
            readOnly
            className="w-full p-3 mt-2 border rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            value={userData.email}
            readOnly
            className="w-full p-3 mt-2 border rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Phone</label>
          <input
            type="text"
            value={userData.phone}
            readOnly
            className="w-full p-3 mt-2 border rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Address</label>
          <input
            type="text"
            value={userData.address}
            readOnly
            className="w-full p-3 mt-2 border rounded-md bg-gray-100"
          />
        </div>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => window.location.href = '/user/settings'}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
