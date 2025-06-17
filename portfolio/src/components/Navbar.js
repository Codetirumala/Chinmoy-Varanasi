import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Varanasi Chinmoy</div>
        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          <li><a href="#hero" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
          <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#certifications" onClick={() => setOpen(false)}>Certifications</a></li>
          <li><a href="#content-writing" onClick={() => setOpen(false)}>Content Writing</a></li>
          <li><a href="#documents" onClick={() => setOpen(false)}>Documentation</a></li>
          <li><a href="#contact" className="contact-btn" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 