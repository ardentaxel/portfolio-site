import React from 'react'
import '../styles/AboutStyles/AboutSectionStyles.css';
import Navbar from './Navbar';
import Card from './Card';
import TechTab from './TechTab';

const About = () => {

  const technologies = ['HTML','CSS','JAVASCRIPT','C++','JAVA','SPRING BOOT','REACT JS','JAVAFX'];
  const components = [];

  for(let i = 0; i < technologies.length; i++) {
    components.push(<TechTab name={technologies[i]}/>);
  }

  return (
    <>
      <div className="about-section">
        <div className="content" >
          <Card className='card'/>
          <div className="about">
            <h1 className='about-title'>Who am I?</h1>

            <p className="about-bio">
              Hello there! I'm <span className="about-name">Axel</span>, a self-taught developer based in <span className='location'>Ottawa, ON</span> with a passion for crafting innovative solutions. I find my excitement in tackling <span className="word">challenges</span> and creating <span className="word">solutions</span>.
              <br/><br/>
                <span className="tech-title">Technologies I’ve worked with:</span>
            </p>
            <div className="tabs">
              {components}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
