import React from 'react';
import './Skills.css';

const skillsData = [
  { name: "Leadership Development", icon: "👨‍💼" },
  { name: "Career Counseling", icon: "🎯" },
  { name: "Learning & Development (L&D)", icon: "📚" },
  { name: "Communication Skills", icon: "💬" },
  { name: "Talent Acquisition", icon: "🔍" },
  { name: "Training Delivery", icon: "🎓" },
  { name: "Human Resource Management", icon: "👥" },
  { name: "Soft Skills Development", icon: "🤝" },
  { name: "Microsoft Office Suite", icon: "💻" },
  { name: "Time Management", icon: "⏰" },
  { name: "Interpersonal Skills", icon: "👥" },
  { name: "Team Management", icon: "👨‍👩‍👧‍👦" },
  { name: "Personality Development", icon: "✨" },
  { name: "Academic Administration", icon: "📋" },
  { name: "E-Learning", icon: "🌐" }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Professional Skills</h2>
          <div className="skills-underline"></div>
          <p className="skills-intro">
            Comprehensive expertise in training, development, and human resources
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-marquee">
            <div className="marquee-content">
              {[...skillsData, ...skillsData, ...skillsData].map((skill, index) => (
                <div key={index} className="marquee-item">
                  <span className="marquee-icon">{skill.icon}</span>
                  <span className="marquee-text">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 