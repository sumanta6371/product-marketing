import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo4.png';

export default function Navbar() {
  const location = useLocation(); // Get the current URL path

  const isActive = (path) => {
    return location.pathname === path ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-28 w-auto py-4" src={logo} alt="Company Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/')}`}
              >
                Home
              </Link>
              {/* <Link to="/products" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/products')}`}>
                Products
              </Link> */}
              <Link
                to="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/about')}`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/contact')}`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
