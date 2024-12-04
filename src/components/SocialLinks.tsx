import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../styles/SocialLinks.css';

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/nitins-04" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
        <FaGithub className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/nitin-shivannagari-a098a3236" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://instagram.com/nitin_s04" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
        <FaInstagram className="social-icon" />
      </a>
      <a href="mailto:nitin.s1204@gmail.com" aria-label="Email Me">
        <MdEmail className="social-icon" />
      </a>
    </div>
  );
};

export default SocialLinks;
