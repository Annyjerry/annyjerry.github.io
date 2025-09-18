import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './about.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-info">
  <div className="contact-details">
    <p><strong>Phone:</strong> +2347025832510</p>
    <p><strong>Email:</strong> aniebietlawrence191@gmail.com</p>
  </div>

  <div className="social-links">
    <a href="https://github.com/annyjerry" target="_blank" rel="noreferrer"><FaGithub className="icon" /></a>
    <a href="https://www.linkedin.com/in/annyjerry/" target="_blank" rel="noreferrer"><FaLinkedin className="icon" /></a>
    <a href="https://twitter.com/annyjerr" target="_blank" rel="noreferrer"><FaTwitter className="icon" /></a>
    <a href="https://wa.me/2347025832510" target="_blank" rel="noreferrer"><FaWhatsapp className="icon" /></a>
  </div>
</div>
    </section>
  );
};

export default Contact;
