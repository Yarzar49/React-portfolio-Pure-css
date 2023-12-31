import React from 'react';
import '../Project.css';
import '../Animation.css';

const Project = ({ title, description, imageUrl, link }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className='button'>
        View Project
      </a>
    </div>
  );
};

export default Project;
