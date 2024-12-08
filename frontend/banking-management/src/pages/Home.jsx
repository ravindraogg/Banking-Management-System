import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
const Home = () => {
  return (
    <><MainHeader></MainHeader><div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">Welcome to Pluto Banking App</h1>
        <p className="text-xl text-gray-600 mb-8">
          Secure, fast, and easy banking solutions at your fingertips.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/createaccount"
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Create Account
          </Link>
        </div>
      </header>

      <section className="bg-white w-full max-w-6xl mx-auto px-6 py-16 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-3xl font-semibold text-blue-800 mb-4">Secure Transactions</h3>
            <p className="text-gray-600">
              Enjoy hassle-free transfers with top-notch security features.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-blue-800 mb-4">Easy Access</h3>
            <p className="text-gray-600">
              Access your bank account and manage transactions with ease on any device.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-blue-800 mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Our support team is available around the clock to assist with any issues.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 text-center py-6 bg-gray-800 text-white w-full">
        <p>&copy; 2024 Banking App. All Rights Reserved.</p>
      </footer>
    </div></>
  );
};

export default Home;
