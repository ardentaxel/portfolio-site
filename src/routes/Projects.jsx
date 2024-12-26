import React from 'react'
import './Project-style.css'

const Projects = () => {
  return (
    <div className='project-container'>
        <div className="project-content">
            <h1 className='header'>My Projects</h1>
            <p className='project-text'>Here are some of the projects I've worked on recently:</p>
            <h3 className='header'>Portfolio Site (This One) | JavaScript, React.JS, CSS</h3>
            <p className='project-text'>Designed and developed a dynamic website that serves as both my portfolio and blog page, providing a personalized and interactive platform to showcase my skills, projects and ideas.</p>
            <h3 className='header'><a href="https://github.com/ardentaxel/Conways-Game-of-Life" className='link'>Conway’s Game of Life with boundaries | Java, JavaFX</a> </h3>
            <p className='project-text'>Engineered an interactive simulation of Conway’s Game of Life. This project presents a unique take on the classic cellularautomaton, encapsulated within a graphical user interface.</p>
            <h3 className='header'><a href="https://github.com/ardentaxel/SMTP_Mail_Client" className="link">Simple Mail Transfer Protocol Client | Java, JavaFX</a> </h3>
            <p className='project-text'>Developed a GUI-based mail client to interact with a Papercut SMTP server.</p>
            <br /><br /> <p className='project-text'>All projects can be found on my <a href="https://github.com/ardentaxel" target="_blank" className='link link-gh'>github profile</a></p>
        </div>
    </div>
  )
}

export default Projects
