import React, { useState, useEffect, useRef } from 'react';
import './Certifications.css';

const certificates = [
  { id: 1, image: require('../assets/certificates/cert1.jpg') },
  { id: 2, image: require('../assets/certificates/cert2.jpg') },
  { id: 3, image: require('../assets/certificates/cert3.jpg') },
  { id: 4, image: require('../assets/certificates/cert4.jpg') },
  { id: 5, image: require('../assets/certificates/cert5.jpg') },
  { id: 6, image: require('../assets/certificates/cert6.jpg') },
  { id: 7, image: require('../assets/certificates/cert7.jpg') }
];

const Certifications = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % certificates.length);
  const prev = () => setCurrent((prev) => (prev - 1 + certificates.length) % certificates.length);

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-icon">🏆</div>
            <div className="decoration-line"></div>
          </div>
          <h2 className="section-title">Professional Certifications</h2>
          <p className="section-subtitle">My achievements and professional qualifications</p>
        </div>
        <div className="certifications-container">
          <div className="slideshow-container single-image-mode">
            <div className="certificate-slide single-image-slide" style={{width: '100%', height: '100%'}}>
              <img src={certificates[current].image} alt={`Certificate ${certificates[current].id}`} className="certificate-full-image" />
            </div>
            <button className="slideshow-nav prev" onClick={prev}>
              <span className="nav-icon">‹</span>
            </button>
            <button className="slideshow-nav next" onClick={next}>
              <span className="nav-icon">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 