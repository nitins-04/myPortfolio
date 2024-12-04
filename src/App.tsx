import React, { useEffect, useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';

function App() {
  const [isNameTypingDone, setIsNameTypingDone] = useState(false);
  const [isSubtitleTyping, setIsSubtitleTyping] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setIsNameTypingDone(true);
      setIsSubtitleTyping(true);
    }, 2000);

    return () => clearTimeout(nameTimer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="vertical-card">
        <div className="card-intro">
          <div className="profile-image">
            <img src="/headshot.JPG" alt="Nitin Shivannagari" />
          </div>
          <h2>
            <span className={`typewriter ${isNameTypingDone ? 'finished' : ''}`}>
              Nitin Shivannagari
            </span>
          </h2>
          <p>
            <span className={`subtitle-typewriter ${isSubtitleTyping ? 'visible' : ''}`}>
              Student<span className="separator">|</span>Problem Solver<span className="separator">|</span>Tech Enthusiast
            </span>
          </p>
        </div>
        <div className="card-social">
          <a href="https://github.com/nitins-04" target="_blank" rel="noopener noreferrer" className="github">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nitin-shivannagari-a098a3236" target="_blank" rel="noopener noreferrer" className="linkedin">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/nitin_s04" target="_blank" rel="noopener noreferrer" className="instagram">
            <FaInstagram />
          </a>
          <a href="mailto:nitin.s1204@gmail.com" className="email">
            <MdEmail />
          </a>
        </div>
      </div>
      <main>
        {theme === 'dark' && (
          <div className="stars">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="star" />
            ))}
          </div>
        )}
        <section id="home" className="section">
          <h1>Hi, I'm Nitin</h1>
        </section>
        <section id="about" className="section">
          <h1>About Me</h1>
        </section>
        <section id="projects" className="section">
          <h1>What I've Built</h1>
        </section>
        <section id="involvements" className="section">
          <h1>Involvements</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
