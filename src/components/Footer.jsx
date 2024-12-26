import React from 'react'
import '../styles/FooterStyles.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="contact">
          <h4 className="footer-heading">Contact</h4>
          <div className="contact-items">
              <a href="mailto:ardentaxeldev@gmail.com"><p className="contact-item">Email</p></a>
              <a href="https://www.linkedin.com/in/eandayiragije/"><p className="contact-item">LinkedIn</p></a>
              <a href="https://github.com/ardentaxel"><p className="contact-item">Github</p></a>
          </div>
        </div>
        <div className="general">
          <h4 className="footer-heading">General</h4>
          <div className="general-items">
              <a href=""></a>
              <a href="#home">
                  <p className="general-item">Home</p>
              </a>
              <a href="#projects">
                  <p className="general-item">Projects</p>
              </a>
              {/* <Link to={'/'}>
                  <p className="general-item">Blog (TBA)</p>
              </Link> */}
              <a href="https://drive.google.com/file/d/1B0ORWKFkZYHgjjJU97lq7OpX-1NM-i5x/view?usp=sharing"><p className="general-item">Resume</p></a>
          </div>
        </div>
        <div className="footer-projects">
          <h4 className="footer-heading">Projects</h4>
          <div className="project-items">
              <a href="/"><p className="project-item">Portfolio Site</p></a>
              <a href="https://github.com/ardentaxel/Conways-Game-of-Life"><p className="project-item">Conway's Game of Life - Bounded</p></a>
              <a href="https://github.com/ardentaxel/SMTP_Mail_Client"><p className="project-item">Simple Mail Transfer Protocol Client</p></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
