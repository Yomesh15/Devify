import React from "react";
import "../CSS/Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Devify</h2>
          <p>Building Modern Web Solutions</p>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:yomeshnagar2006@gmail.com">yomeshnagar2006@gmail.com</a></p>
          <p>Phone: <a href="tel:8955764235">8955764235</a></p>
          <p>Location: Jaipur, India</p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Yomesh15" target="_blank" rel="noopener noreferrer">
              <FaGithub className="iconss" />
            </a>
            <a href="https://www.linkedin.com/in/yomesh-nagar-064a89374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin  className="iconss"/>
            </a>
            <a href="https://www.instagram.com/yomesh_nagar15?igsh=MWxiaWtjYWllYXVrdA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="iconss"/>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Devify. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
