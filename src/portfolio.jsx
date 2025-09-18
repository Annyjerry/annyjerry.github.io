import React, { useState } from 'react';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';
import PortfolioModal from './PortfolioModal';
import './portfolio.css';

const projects = [
  { 
    id: 1, 
    title: 'Lending Apps Reviews & Usage Dashboard using Python', 
    image: project1, 
    description: 'This project implements a Streamlit-based interactive dashboard for analyzing mobile app reviews. It loads review data from an uploaded or default CSV file, cleans it (e.g., converting dates, ratings, removing invalid app names), and then provides filtering options by app, country, and date. The dashboard displays key performance indicators such as total reviews, average rating, 5-star counts, and most used app, and organizes insights into tabs: Ratings Analysis (apps with most 5⭐ ratings and lowest averages), Usage by Country (review counts grouped by app and country), and Raw Data (with export option). It uses pandas for data handling, Plotly for visualizations, and includes caching, sampling, and validation to ensure smooth performance and accurate insights.', 
    github: 'https://github.com/Annyjerry/AppReview-Interactive-Dashboard' 
  },
  { 
    id: 2, 
    title: 'Opay User KPI Dashboard', 
    image: project2, 
    description: 'The picture is a KPI Dashboard that visually tracks and compares key business performance metrics for Q4 2023. It presents data on revenue, new customers, average revenue per customer, and customer acquisition costs, showing both actual values against set targets and performance trends compared to the previous year. The dashboard also summarizes annual totals for revenue, total customers, new customers, and revenue per customer, providing a clear snapshot of overall business performance at a glance.', 
    
  },
  { 
    id: 3, 
    title: 'Malicious URLs Detection System', 
    image: project3, 
    description: 'Malicious URL Detection System – Developed an intelligent web application using Streamlit and a trained machine learning model to detect and classify URLs as either benign or malicious in real time. The system automatically extracts key features such as URL length, domain structure, special character count, and URL shortening patterns before predicting potential threats. Users can input any URL, and the app provides instant results with clear security warnings for malicious links, highlighting risks like phishing, malware, and data theft. This project demonstrates expertise in data preprocessing, model integration, and user-friendly interface design for practical cybersecurity applications.', 
    github: 'https://github.com/Annyjerry/Malicious_URls' 
  },
  { 
    id: 4, 
    title: 'Malaria Prediction System', 
    image: project4, 
    description: 'This a Python project to predict the likelihood of a malaria outbreak using a trained Naive Bayes model. It allows users to input environmental and health-related factors such as rainfall, temperature, humidity, mosquito population, and recorded malaria cases. The app then processes these inputs, checks for completeness, and provides a prediction outcome of either High Risk or Low Risk. It also features clear explanations of each parameter in the sidebar, making it both interactive and user-friendly for decision-making in public health contexts.', 
    github: 'https://github.com/Annyjerry/Malaria-outbreak-prediction-system' 
  }
];

const Portfolio = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="portfolio" className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-card">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <h3>{project.title}</h3>
            {/* Removed description here */}
            <button className="case-btn" onClick={() => setSelected(project)}>Case Study</button>
          </div>
        ))}
      </div>
      {selected && <PortfolioModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Portfolio;
