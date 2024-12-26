import React from 'react'
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import '../styles/HeroStyles/HomeStyles.css'

const Home = () => {
  return (
    <div className='container'>
      <Navbar/>
      <div className="sections">
        <section className="hero-section" id='home'><Hero/></section>
        <section className="about-section-container"><About/></section>
        <section className="project-section" id='projects'><Projects/></section>
        {/* <section className="exp-section"><Experience/></section> */}
        <section className="footer-section"><Footer/></section>
      </div>
    </div>
  )
}

export default Home
