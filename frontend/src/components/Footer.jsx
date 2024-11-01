import React from 'react';
import './Footer.css'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="social-icons">
          <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
          <i className="fab fa-youtube"></i>
          </a>
          <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="footer-text">© 2024 Y. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
