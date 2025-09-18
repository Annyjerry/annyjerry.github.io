import React from 'react';
import './portfolio.css';

const PortfolioModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} className="modal-image" />
        <p className="modal-desc">{project.description}</p>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-btn"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default PortfolioModal;
