// src/components/Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-white text-xl font-bold">TechHub</h1>
        
        {/* Hamburger Menu for mobile */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          {/* Icon (3 horizontal lines) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Menu for desktop view */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="text-white hover:text-gray-300">
              Service
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu (visible when toggled) */}
        {isMenuOpen && (
          <ul className="absolute top-14 left-0 w-full bg-blue-600 md:hidden flex flex-col items-center space-y-4 p-4 z-50">
            <li>
              <Link to="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/service" className="text-white hover:text-gray-300" onClick={toggleMenu}>
                Service
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
