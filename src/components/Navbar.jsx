import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = ({ isAuthenticated, handleLogout }) => (
  <nav className="navbar">
    <Link className="logo" to="/">Event Booking System</Link>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      {isAuthenticated ? (
        <>
          <li><button onClick={handleLogout}>Logout</button></li>
        </>
      ) : (
        <li><Link to="/login">Login</Link></li>
      )}
    </ul>
  </nav>
);

export default Navbar;
