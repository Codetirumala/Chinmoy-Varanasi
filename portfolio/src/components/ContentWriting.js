import React, { useState, useEffect, useRef } from 'react';
import './ContentWriting.css';

const ContentWriting = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Array of 15 content writing items
  const contentItems = [
    { id: 1, image: '/content-writing/content1.jpeg' },
    { id: 2, image: '/content-writing/content2.jpeg' },
    { id: 3, image: '/content-writing/content3.jpeg' },
    { id: 4, image: '/content-writing/content4.jpeg' },
    { id: 5, image: '/content-writing/content5.jpeg' },
    { id: 6, image: '/content-writing/content6.jpeg' },
    { id: 7, image: '/content-writing/content7.jpeg' },
    { id: 8, image: '/content-writing/content8.jpeg' },
    { id: 9, image: '/content-writing/content9.jpeg' },
    { id: 10, image: '/content-writing/content10.jpeg' },
    { id: 11, image: '/content-writing/content11.jpeg' },
    { id: 12, image: '/content-writing/content12.jpeg' },
    { id: 13, image: '/content-writing/content13.jpeg' },
    { id: 14, image: '/content-writing/content14.jpeg' },
    { id: 15, image: '/content-writing/content15.jpeg' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    pauseAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
    pauseAutoPlay();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, contentItems.length]);

  return (
    <section id="content-writing" className="content-writing-section">
      <div className="container">
        <div className="section-header">
          <h2>Content Writing Portfolio</h2>
          <p>Showcasing diverse content creation across multiple platforms and industries</p>
        </div>

        <div className="slideshow-container">
          <div className="slideshow-wrapper">
            <div 
              className="slideshow-track"
              style={{ transform: `translateX(-${currentSlide * 280}px)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="content-card">
                  <div className="card-image-container">
                    <img 
                      src={item.image} 
                      alt={`Content ${item.id}`}
                      className="card-image"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/250x300/667eea/ffffff?text=Content+${item.id}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="nav-btn prev-btn" onClick={prevSlide}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="nav-btn next-btn" onClick={nextSlide}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button 
              className={`play-pause-btn ${isAutoPlaying ? 'paused' : 'playing'}`}
              onClick={isAutoPlaying ? pauseAutoPlay : resumeAutoPlay}
            >
              {isAutoPlaying ? (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                  <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                </svg>
              )}
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {contentItems.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="slide-counter">
            <span className="current-slide">{currentSlide + 1}</span>
            <span className="total-slides">/ {contentItems.length}</span>
          </div>
        </div>

        {/* Content Writing Stats */}
        <div className="content-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Content Types</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Articles Written</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWriting; 