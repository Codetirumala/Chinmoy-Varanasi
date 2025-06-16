import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="section about-section">
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
        <div className="about-underline"></div>
      </div>
      
      <div className="about-content">
        <div className="about-animation">
          <div className="animation-circle">
            <div className="animation-inner">
              <span className="animation-icon">👨‍🏫</span>
            </div>
          </div>
          <div className="animation-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
        </div>
        
        <div className="about-text">
          <div className="about-intro">
            <p className="highlight-text">
              Transforming Lives Through Knowledge & Skills
            </p>
            <p className="main-text">
              I am a dedicated Life Skills Coach and Trainer with a passion for empowering individuals to achieve their full potential. With over 5 years of experience as a BOSCH BRIDGE MEPSC Trainer, I specialize in delivering comprehensive training programs that combine practical skills with psychological insights.
            </p>
            {/* <p className="sub-text">
              My expertise spans across English communication, Psychology, Marketing, and Human Resources, making me uniquely qualified to address both personal and professional development needs. Through interactive sessions and personalized coaching, I help participants develop the confidence and skills needed to excel in their careers.
            </p> */}
          </div>

          
        </div>
      </div>
    </div>
  </section>
);

export default About; 