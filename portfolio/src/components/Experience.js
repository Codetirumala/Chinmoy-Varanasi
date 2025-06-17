import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const experienceItems = experienceRef.current?.querySelectorAll('.experience-item');
    experienceItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      company: "Three Ten Initiative Technologies LLP",
      position: "BOSCH Bridge MEPSC Office Assistant Trainer",
      duration: "Dec 2018 - Oct 2023",
      years: "4 yrs 11 mos",
      location: "Visakhapatnam, Andhra",
      type: "Full-time",
      logo: "🏢",
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: ["Training", "LMS Management", "Career Counseling", "Digital Connect"]
    },
    {
      id: 2,
      company: "Freelancer",
      position: "Certified BFSI Trainer",
      duration: "Apr 2018 - Dec 2018",
      years: "9 mos",
      location: "Srikakulam, Andhra Pradesh",
      type: "Freelance",
      logo: "💼",
      color: "#f39c12",
      gradient: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
      skills: ["BFSI Training", "Loan Processing", "Work-Life Balance", "KRA/KLO"]
    },
    {
      id: 3,
      company: "Tata STRIVE",
      position: "YDM Facilitator",
      duration: "Aug 2016 - Mar 2018",
      years: "1 yr 8 mos",
      location: "Srikakulam",
      type: "Full-time",
      logo: "🎯",
      color: "#e74c3c",
      gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
      skills: ["Youth Mobilization", "Career Discovery", "ABL/IBL", "Placement"]
    },
    {
      id: 4,
      company: "Lingua Franca",
      position: "HR-T&D",
      duration: "Jul 2014 - Aug 2016",
      years: "2 yrs 2 mos",
      location: "Visakhapatnam",
      type: "Full-time",
      logo: "📚",
      color: "#9b59b6",
      gradient: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
      skills: ["Skills Gap Analysis", "Training Impact", "Activity Based Learning", "SMART Training"]
    },
    {
      id: 5,
      company: "Gayatri College for PG Courses",
      position: "Lecturer in MBA",
      duration: "Jun 2012 - Apr 2014",
      years: "1 yr 11 mos",
      location: "Srikakulam, Andhra Pradesh",
      type: "Full-time",
      logo: "🎓",
      color: "#3498db",
      gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
      skills: ["MBA Instruction", "Academic Administration", "Student Mentoring", "Curriculum Development"]
    },
    {
      id: 6,
      company: "CfBT Education Services",
      position: "Soft Skills Trainer",
      duration: "Feb 2012 - Mar 2012",
      years: "2 mos",
      location: "Razam, Andhra Pradesh",
      type: "Full-time",
      logo: "🌟",
      color: "#f1c40f",
      gradient: "linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)",
      skills: ["Soft Skills", "Training Assessment", "Activity Based Learning", "Job Readiness"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-icon">💼</div>
            <div className="decoration-line"></div>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My journey through various roles and organizations</p>
        </div>
        
        <div className="experience-list" ref={experienceRef}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-line" style={{ background: exp.gradient }}></div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div className="company-logo" style={{ background: exp.gradient }}>
                    <span className="logo-icon">{exp.logo}</span>
                    <div className="logo-glow"></div>
                  </div>
                  
                  <div className="experience-info">
                    <div className="position-row">
                      <h3 className="position-title">{exp.position}</h3>
                      <span className="experience-badge" style={{ background: exp.gradient }}>
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="company-name">{exp.company}</h4>
                    
                    <div className="skills-tags">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag" style={{ borderColor: exp.color }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="experience-meta">
                    <div className="meta-item">
                      <div className="meta-icon">📅</div>
                      <div className="meta-content">
                        <span className="meta-label">Duration</span>
                        <span className="meta-value">{exp.duration}</span>
                      </div>
                    </div>
                    <div className="meta-item">
                      <div className="meta-icon">⏱️</div>
                      <div className="meta-content">
                        <span className="meta-label">Experience</span>
                        <span className="meta-value">{exp.years}</span>
                      </div>
                    </div>
                    <div className="meta-item">
                      <div className="meta-icon">📍</div>
                      <div className="meta-content">
                        <span className="meta-label">Location</span>
                        <span className="meta-value">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="experience-overlay" style={{ background: exp.gradient }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 