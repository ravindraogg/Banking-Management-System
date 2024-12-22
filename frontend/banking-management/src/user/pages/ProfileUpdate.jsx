import React, { useState, useEffect } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import UserFooter from '../components/UserFooter';

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Assuming the customer ID is stored in localStorage or from session
  const customerId = localStorage.getItem('customerId');

  // Fetch current user profile on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      if (!customerId) {
        setError('Customer ID not found. Please log in.');
        return;
      }

      try {
        const response = await fetch(`https://backend-pluto-banking-d0hkd7hyd3ejhefd.southindia-01.azurewebsites.net/customer/${customerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();
        // Set form data with the current user profile
        setFormData({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, [customerId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill out all fields.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/customer/${customerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0], // Assuming first name is the first word
          lastName: formData.name.split(' ')[1] || '', // Last name is the second word
          email: formData.email,
          phone: formData.phone,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      // Optionally, handle the response data if needed
      alert('Profile Updated Successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold">Updating Profile...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Update Your Profile</h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
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
