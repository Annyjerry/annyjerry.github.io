import React, { useEffect, useRef, useState } from 'react';
import './process.css';

const Process = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 } // trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="process" className={`process ${isVisible ? "active" : ""}`} ref={sectionRef}>
      <h2>My Work Process</h2>
      <div className="process-steps">
        <div className="step">
          <h3>Research</h3>
          <p>Understand client requirements and data sources.</p>
        </div>
        <div className="step">
          <h3>Analyze</h3>
          <p>Clean, visualize, and interpret data for insights.</p>
        </div>
        <div className="step">
          <h3>Model</h3>
          <p>Build and fine-tune ML models for predictions.</p>
        </div>
        <div className="step">
          <h3>Deploy</h3>
          <p>Deploy models or dashboards for real-time usage.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
