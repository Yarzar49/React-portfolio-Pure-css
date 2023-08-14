import React from 'react';
import '../Skills.css';
import '../Animation.css';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Git'];

  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className='button'>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
