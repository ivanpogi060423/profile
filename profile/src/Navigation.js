import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-custom-light">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">MyPersonalProfile</Link>

        {/* Toggler button for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/Skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;