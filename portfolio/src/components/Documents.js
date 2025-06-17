import React, { useState } from 'react';
import './Documents.css';

const Documents = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const documents = [
    {
      id: 1,
      filename: 'document.pdf',
      title: 'Swami Vivekananda MEDITATION AND ITS METHODS',
      author: 'Swami Vivekananda',
      category: 'Spirituality & Meditation',
      icon: '🧘‍♂️'
    },
    {
      id: 2,
      filename: 'document (1).pdf',
      title: 'The Nobel Art of Laziness',
      author: 'Peace J. Williams',
      category: 'Self-Development',
      icon: '😌'
    },
    {
      id: 3,
      filename: 'document (2).pdf',
      title: 'One Minute with God',
      author: 'Sid Roth (Foreword)',
      category: 'Spirituality',
      icon: '🙏'
    },
    {
      id: 4,
      filename: 'document (3).pdf',
      title: 'Anger Management',
      author: 'Ryan James',
      category: 'Psychology & Self-Help',
      icon: '😤'
    },
    {
      id: 5,
      filename: '1717442102092.pdf',
      title: 'Time Management',
      author: 'Malcolm Wiese',
      category: 'Productivity',
      icon: '⏰'
    },
    {
      id: 6,
      filename: '1703509521185.pdf',
      title: 'Gratitude Journal',
      author: 'Personal Development',
      category: 'Mindfulness',
      icon: '📝'
    }
  ];

  const handleDocumentClick = (doc) => {
    setSelectedDoc(doc);
    // Open PDF in new tab
    window.open(`/documents/${doc.filename}`, '_blank');
  };

  return (
    <section id="documents" className="documents-section">
      <div className="container">
        <div className="section-header">
          <h2>Documents & Resources</h2>
          <p>Explore my collection of valuable documents and resources</p>
        </div>

        <div className="documents-grid">
          {documents.map((doc) => (
            <div 
              key={doc.id} 
              className="document-card"
              onClick={() => handleDocumentClick(doc)}
            >
              <div className="document-icon">
                <span className="icon">{doc.icon}</span>
              </div>
              <div className="document-content">
                <h3 className="document-title">{doc.title}</h3>
                <p className="document-author">by {doc.author}</p>
                <span className="document-category">{doc.category}</span>
              </div>
              <div className="document-action">
                <span className="view-btn">View PDF</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents; 