import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailIcon from '@mui/icons-material/Email';

interface NavLinksProps {
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  const scrollToSection = (sectionId: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={className}>
      <a href="#home" onClick={scrollToSection('home')} aria-label="Home">
        <HomeIcon />
      </a>
      <a href="#about" onClick={scrollToSection('about')} aria-label="About">
        <PersonIcon />
      </a>
      <a href="#projects" onClick={scrollToSection('projects')} aria-label="Projects">
        <CodeIcon />
      </a>
      <a href="#involvements" onClick={scrollToSection('involvements')} aria-label="Involvements">
        <GroupsIcon />
      </a>
      <a href="#contact" onClick={scrollToSection('contact')} aria-label="Contact">
        <EmailIcon />
      </a>
    </div>
  );
};

export default NavLinks;
