import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber = "918886874955" }) => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your services. Can we discuss further?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <div className="whatsapp-icon">
        <i className="fab fa-whatsapp"></i>
      </div>
      <div className="whatsapp-tooltip">
        Chat on WhatsApp
      </div>
    </div>
  );
};

export default WhatsAppButton; 