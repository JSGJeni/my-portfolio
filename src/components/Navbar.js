import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
