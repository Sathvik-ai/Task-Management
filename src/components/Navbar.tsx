import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, CheckSquare } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Layout className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold">2022bcd0028</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600">
              <Layout className="h-5 w-5 mr-1" />
              Dashboard
            </Link>
            <Link to="/tasks" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600">
              <CheckSquare className="h-5 w-5 mr-1" />
              Tasks
            </Link>
            <div className="ml-4 text-sm text-gray-500">
              Welcome, Sathvik Kiran
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;