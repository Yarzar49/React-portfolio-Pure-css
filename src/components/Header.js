import React from 'react';
import '../Header.css';


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </nav>
      <h1>Yarzar Tin Shwe</h1>
      <p>Web Developer</p>
    </header>
  );
};

export default Header;
