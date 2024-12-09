import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    profilePicture: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const customerId = localStorage.getItem('customerId');
    if (!customerId) {
      setError('No customer ID found. Please log in.');
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/customer/${customerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();
        setUserData({
          fullName: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          address: data.address,
          profilePicture: data.profilePicture || 'https://via.placeholder.com/150',
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
    <>
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md p-4 flex justify-between items-center">
        {/* Title */}
        <h1 className="text-2xl font-bold">Pluto Banking</h1>

        {/* Home Icon */}
        <a
          href="/user/dashboard"
          className="flex items-center space-x-2 text-white hover:text-gray-200 transition duration-300"
        >
          <FaHome size={24} /> {/* Home Icon */}
          <span className="hidden sm:inline text-lg font-medium">Home</span>
        </a>
      </header>

      {/* User Profile Content */}
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
        {/* User Profile Header */}
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
            <img
              src={userData.profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{userData.fullName}</h2>
            <p className="text-gray-600">{userData.email}</p>
          </div>
        </div>

        {/* User Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Details</h3>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-gray-700">
                <strong>Phone:</strong> {userData.phone}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-gray-700">
                <strong>Address:</strong> {userData.address}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.location.href = '/user/settings'}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
