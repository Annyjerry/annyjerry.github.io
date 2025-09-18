import React from 'react';
import './hero.css';
import proImage from './images/pro.JPG';
import cvFile from './cv/Aniebiet Jeremiah1.pdf'; // place your CV inside src/cv folder

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img src={proImage} alt="Aniebiet Jeremiah" />
      <div className="hero-text">
        <h1>
          Hi, I'm <span className="highlight">Aniebiet Jeremiah</span>
        </h1>
        <p>
          Data Analyst and Machine Learning Engineer. What I do is help organizations
          and individuals transform raw data into clear, actionable insights that drive smarter decisions.
          I specialize in analyzing patterns, building intelligent models, and creating solutions 
          that not only explain what’s happening but also predict what’s likely to come next. 
          The real value I bring is helping businesses and teams move from intuition-based decisions 
          to data-driven strategies that improve growth, efficiency, and impact.
          In short, I turn complex data into stories and solutions that empower 
          people to act with confidence.
        </p>
        <div className="hero-buttons">
          <button className="cta-btn">Let's Talk</button>
          <a href={cvFile} download="Aniebiet Jeremiah cv.pdf" className="download-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
