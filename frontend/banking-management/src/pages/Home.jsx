import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';

const Home = () => {
  return (
    <>
      <MainHeader />
      <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200 flex flex-col justify-center items-center">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Pluto Banking</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Simplify your banking experience with secure, fast, and reliable solutions tailored for your needs.
          </p>
          <div className="flex space-x-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/createaccount"
              className="px-8 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Create Account
            </Link>
          </div>
        </header>
        
        <section className="w-full max-w-5xl bg-white rounded-lg shadow-lg px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <i className="fas fa-lock text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Transactions</h3>
            <p className="text-gray-600">
              Experience seamless transfers with cutting-edge encryption and security.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <i className="fas fa-mobile-alt text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Access</h3>
            <p className="text-gray-600">
              Manage your accounts anytime, anywhere, on any device.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
              <i className="fas fa-headset text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Reach out to our dedicated team for assistance, anytime.
            </p>
          </div>
        </section>
        <footer className="w-full bg-gray-800 py-6 text-white mt-16">
          <div className="text-center">
            <p className="text-sm">&copy; 2024 Pluto Banking. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
