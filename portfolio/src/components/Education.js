import React from 'react';
import './Education.css';

const educationData = [
  {
    degree: "Master of Arts (MA) in English",
    institution: "Acharya Nagarjuna University",
    period: "Jan 2020 - Mar 2023",
    grade: "A",
    logo: "🎓",
    activities: [],
    description: "Advanced studies in English literature and language"
  },
  {
    degree: "Master of Science (MS) in Psychology",
    institution: "Acharya Nagarjuna University",
    period: "May 2017 - Jun 2019",
    grade: "A",
    logo: "🧠",
    activities: [
      "Organizational Psychology",
      "Counselling",
      "Development Psychology",
      "Social Psychology"
    ],
    description: "Specialized in psychological studies with focus on organizational and developmental aspects"
  },
  {
    degree: "Master of Business Administration (MBA)",
    specialization: "Marketing and Human Resources",
    institution: "Ambedkar Institute of Management Studies, Visakhapatnam",
    period: "Apr 2006 - May 2008",
    grade: "A",
    logo: "📊",
    activities: [
      "Branding",
      "Event management",
      "Recruitment",
      "Training and Development",
      "Customer service",
      "Query handler"
    ],
    description: "Comprehensive business education with focus on marketing and HR management"
  },
  {
    degree: "Bachelor of Science (BS)",
    specialization: "Maths, Physics and Computer Science",
    institution: "Andhra University",
    period: "Apr 2003 - Mar 2006",
    grade: "A",
    logo: "🔬",
    activities: ["NCC"],
    description: "Strong foundation in science and technology"
  },
  {
    degree: "Intermediate Education",
    specialization: "Maths, Physics, Chemistry",
    institution: "Board of Intermediate Education, Andhra Pradesh",
    period: "Apr 2001 - Mar 2003",
    grade: "A",
    logo: "📚",
    activities: [
      "Physical training",
      "Science lab facility"
    ],
    description: "Higher secondary education with focus on science subjects"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    specialization: "SUPW and Economics",
    institution: "ST. THOMAS ENGLISH SCHOOL",
    period: "2000 - 2001",
    grade: "A",
    logo: "🎒",
    activities: [
      "Debates",
      "Elocution",
      "Essay Competitions"
    ],
    description: "Active participation in academic and extracurricular activities, with special interest in Economics"
  }
];

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="education-container">
        <div className="education-header">
          <h2>Education Journey</h2>
          <div className="education-underline"></div>
          <p className="education-intro">
            A comprehensive academic background spanning from secondary education to postgraduate studies
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-icon">{edu.logo}</span>
                <div className="timeline-line"></div>
              </div>
              
              <div className="education-card">
                <div className="card-header">
                  <div className="degree-info">
                    <h3 className="degree-title">{edu.degree}</h3>
                    {edu.specialization && (
                      <p className="specialization">{edu.specialization}</p>
                    )}
                  </div>
                  <div className="grade-badge">
                    Grade {edu.grade}
                  </div>
                </div>

                <div className="card-body">
                  <div className="institution-info">
                    <h4 className="institution-name">{edu.institution}</h4>
                    <p className="period">{edu.period}</p>
                  </div>
                  
                  <p className="description">{edu.description}</p>
                  
                  {edu.activities && edu.activities.length > 0 && (
                    <div className="activities">
                      <h5>Activities & Societies</h5>
                      <div className="activity-tags">
                        {edu.activities.map((activity, actIndex) => (
                          <span key={actIndex} className="activity-tag">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 