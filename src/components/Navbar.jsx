import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl">My Store</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Products</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;