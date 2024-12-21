import { FaHome } from 'react-icons/fa'; // Importing the Home icon from React Icons

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md p-4 flex justify-between items-center">
      {/* Title */}
     <a href="/"> <h1 className="text-2xl font-bold">Pluto Banking</h1>

      {/* Home Icon */}
      <a href="/user/dashboard" className="flex items-center space-x-2 text-white hover:text-gray-200 transition duration-300">
        <FaHome size={24} /> {/* Home Icon */}
        <span className="hidden sm:inline text-lg font-medium">Home</span> {/* Optional: Show text on larger screens */}
      </a>
    </header>
  );
};

export default Header;
