import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/footer.css";

import facebookLogo from "../assets/Logofacebook.png";
import  twitterLogo from "../assets/Logotwitter.png";
import linkedinLogo from "../assets/Logolinkedin.png";
import instagramLogo from "../assets/Logoinsta.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <ul>
            <li><Link to="/">techOn Sphere</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <ul>
            <li><Link to="/web-development">Our Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/Our-Blogs">Blog</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/juber-khan-27a8751b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="contactInfoSocialMediaLogos" />
            </a>
            <a href="https://github.com/juberkb" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" className="contactInfoSocialMediaLogos" />
            </a>
            <a href="https://www.instagram.com/khan.juber_kb?igsh=MXNoYmV5bmw2Mzg4YQ==" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="contactInfoSocialMediaLogos" />
            </a>
            <a href="https://www.instagram.com/khan.juber_kb?igsh=MXNoYmV5bmw2Mzg4YQ==" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="contactInfoSocialMediaLogos" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
