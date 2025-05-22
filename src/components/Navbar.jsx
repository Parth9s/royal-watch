import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);




  return (
    <nav className="navbar">
      <div className="navbar-top flex w-full px-8 py-4">
        <ul className="left-links flex">
          <li><Link to="/india" className="text-xs tracking-widest hover:text-gray-600">INDIA</Link></li>
          <li><Link to="/contact" className="text-xs tracking-widest hover:text-gray-600">CONTACT US</Link></li>
          <li><Link to="/services" className="text-xs tracking-widest hover:text-gray-600">SERVICES</Link></li>
        </ul>

        <div className="logo-container">
          <Link to="/" className="logo">Royal-X</Link>
        </div>

        <ul className="right-links flex">
          <li className="icon">
            <Link to="/favorites">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </Link>
          </li>
          <li className="icon">
            <Link to="/profile">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </Link>
          </li>
          <li className="icon">
            <Link to="/cart">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-bottom flex justify-center w-full">
        <ul className="bottom-links flex">
          <li><Link to="/brands" className="text-sm tracking-wider font-medium hover:text-black">BRANDS</Link></li>
          <li><Link to="/prestige-pulse" className="text-sm tracking-wider font-medium hover:text-black">PRESTIGE PULSE</Link></li>
          <li><Link to="/timeless-tech" className="text-sm tracking-wider font-medium hover:text-black">TIMELESS TECH</Link></li>
          <li><Link to="/signature-craft" className="text-sm tracking-wider font-medium hover:text-black">SIGNATURE CRAFT</Link></li>
          <li><Link to="/luxury-vanguard" className="text-sm tracking-wider font-medium hover:text-black">PREMIUM ESSENTIALS</Link></li>
          <li><Link to="/exclusive-ticks" className="text-sm tracking-wider font-medium hover:text-black">ELITE CLASSICS</Link></li>
          <li><Link to="/iconic-innovate" className="text-sm tracking-wider font-medium hover:text-black">PRESTIGE ICONS</Link></li>
          <li><Link to="/premier-editions" className="text-sm tracking-wider font-medium hover:text-black">MASTERPIECES</Link></li>
          <li className="search-icon">
            <Link to="/search">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      <hr className="border-t border-gray-200" />
    </nav>
  );
};

export default Navbar;