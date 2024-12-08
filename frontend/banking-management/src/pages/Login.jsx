import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', credentials);
      
      if (response.status === 200) {
        const { customerId } = response.data;  // Extract customerId from the response

        // Store the customerId in localStorage
        localStorage.setItem('customerId', customerId);

        // Optionally, store any other data like token or theme
        // localStorage.setItem('theme', 'system');

        if (isAdmin) {
          navigate('/admin/dashboard');
        } else {
          navigate('/user/dashboard');
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <header className="bg-blue-600 text-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pluto Banking</h1>
      </header>
      <div className="p-8 space-y-6 bg-gray-100 rounded-lg shadow-md w-1/3 mx-auto mt-16">
        <h2 className="text-xl font-semibold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
              className="mr-2"
            />
            <label>Login as Admin</label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../api';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const [isAdmin, setIsAdmin] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { token } = await login(credentials.email, credentials.password);
//       localStorage.setItem('token', token);

//       if (isAdmin) {
//         navigate('/admin/dashboard');
//       } else {
//         navigate('/user/dashboard');
//       }
//     } catch (error) {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="p-8 space-y-6 bg-gray-100 rounded-lg shadow-md w-1/3 mx-auto mt-16">
//       <h2 className="text-xl font-semibold text-center">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={credentials.email}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={credentials.password}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded-md"
//           />
//         </div>
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={isAdmin}
//             onChange={() => setIsAdmin(!isAdmin)}
//             className="mr-2"
//           />
//           <label>Login as Admin</label>
//         </div>
//         <div className="text-center">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
