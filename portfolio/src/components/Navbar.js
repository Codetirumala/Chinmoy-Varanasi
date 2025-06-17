import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setOpen(false);
  };

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
          <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
          <li><a href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li>
          <li><a href="#content-writing" onClick={() => scrollToSection('content-writing')}>Content Writing</a></li>
          <li><a href="#documents" onClick={() => scrollToSection('documents')}>Documentation</a></li>
          <li><a href="#contact" className="contact-btn" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 