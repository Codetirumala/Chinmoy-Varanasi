import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="hero" className="section hero-section">
    <div className="hero-inner">
      <div className="hero-text-block">
        <h1>Varanasi Chinmoy</h1>
        <h2>Life Skills Coach & Trainer</h2>
        <p className="hero-intro">
          Empowering individuals with the knowledge and skills to succeed in their careers and personal lives.
        </p>
        <a href="documents/resume.pdf" className="hero-download-btn" download>
          <span className="hero-download-icon" aria-hidden="true">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M10 3v10m0 0l-4-4m4 4l4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="15" width="14" height="2" rx="1" fill="#fff"/>
            </svg>
          </span>
          Download Resume
        </a>
      </div>
      <div className="hero-image-block">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQFZ5-EaBukgQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710001053177?e=1755734400&v=beta&t=quceyUt7PcuONsWo-YuANWYVANA2DqCOUP2wyVZcf1g"
          alt="Varanasi Chinmoy - Life Skills Coach"
          className="hero-photo"
        />
      </div>
    </div>
  </section>
);

export default Hero;