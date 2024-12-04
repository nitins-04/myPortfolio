import React, { useState, useEffect, useRef } from 'react';
import { Home, Person, Code, Work, LightMode, DarkMode } from '@mui/icons-material';

const sections = [
  { id: 'home', icon: Home, offset: 0 },
  { id: 'about', icon: Person, offset: 0 },
  { id: 'projects', icon: Code, offset: 0 },
  { id: 'involvements', icon: Work, offset: 0 }
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigationTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isManualNavigation) {
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManualNavigation]);

  useEffect(() => {
    const activeIndex = sections.findIndex(section => section.id === activeSection);
    setIndicatorPosition(activeIndex);
  }, [activeSection]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsManualNavigation(true);
      
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current);
      }

      setActiveSection(sectionId);

      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

      navigationTimeout.current = setTimeout(() => {
        setIsManualNavigation(false);
      }, 1000);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-items">
        {sections.map(({ id, icon: Icon }) => (
          <button
            key={id}
            className={`nav-item ${activeSection === id ? 'active' : ''}`}
            onClick={() => handleNavClick(id)}
          >
            <Icon />
          </button>
        ))}
        <div className="theme-toggle">
          {isDarkMode ? <LightMode /> : <DarkMode />}
          <span className="tooltip">Light Mode Coming Soon!</span>
        </div>
        {activeSection !== 'theme' && (
          <div 
            className="nav-indicator"
            style={{ '--position': indicatorPosition } as React.CSSProperties}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
