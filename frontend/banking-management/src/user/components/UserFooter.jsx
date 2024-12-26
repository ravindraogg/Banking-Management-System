import React from 'react';

const UserFooter = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Banking App. All rights reserved.
      </p>
      <p className="text-sm mt-2">
        Developed by: Ravindra S, Nitesh Reddy, Pooja C.G, Bhavana, and Dhanushree.
      </p>
    </footer>
  );
};

export default UserFooter;
