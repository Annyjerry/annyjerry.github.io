import React from 'react';
import excelImage from './images/excel.png';
import kerasImage from './images/ke.png';
import pythonImage from './images/python.png';
import sqlImage from './images/sql.png';
import tensorImage from './images/ten.png';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <img src={sqlImage} alt="SQL" />
          <p>SQL</p>
        </div>
        <div className="skill-card">
          <img src={pythonImage} alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill-card">
          <img src={excelImage} alt="Excel" />
          <p>Excel</p>
        </div>
        <div className="skill-card">
          <img src={kerasImage} alt="Keras" />
          <p>Keras</p>
          </div>
          <div className="skill-card">
          <img src={tensorImage} alt="TensorFlow" />
          <p>TensorFlow</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
