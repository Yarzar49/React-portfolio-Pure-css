import React from 'react';
import '../Skills.css';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Git'];

  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
