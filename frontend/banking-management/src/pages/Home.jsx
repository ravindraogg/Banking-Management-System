import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';

const Home = () => {
  return (
    <>
      <MainHeader />
      <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200 flex flex-col justify-center items-center px-4">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Pluto Banking</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Simplify your banking experience with secure, fast, and reliable solutions tailored for your needs.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <Link
              to="/login"
              className="px-6 md:px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/createaccount"
              className="px-6 md:px-8 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Create Account
            </Link>
          </div>
        </header>
        
        <section className="w-full max-w-5xl bg-white rounded-lg shadow-lg px-4 sm:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <i className="fas fa-lock text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Secure Transactions</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Experience seamless transfers with cutting-edge encryption and security.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <i className="fas fa-mobile-alt text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Easy Access</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Manage your accounts anytime, anywhere, on any device.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
              <i className="fas fa-headset text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Reach out to our dedicated team for assistance, anytime.
            </p>
          </div>
        </section>
      </div>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white p-4 text-center w-full">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Banking App. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Developed by: Ravindra S, Nitesh Reddy, Pooja C.G, Bhavana, and Dhanushree.
        </p>
      </footer>
    </>
  );
};

export default Home;
