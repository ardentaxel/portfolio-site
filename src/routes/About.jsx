import React from 'react'
import './About-style.css'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import ProgressBar from '../components/ProgressBar';

const About = () => {
  return (
    <div className='about-container'>
      <div className="about-content">
        <h1 className='header'>About Me</h1>
        <p className='about-text'>Hello there! I'm <span className='highlight'>Emmanuel Axel Ndayiragije</span>, a self-taught software developer based in <span className='highlight'>Ottawa, ON</span> with a passion for crafting innovative solutions. <br /> <br /> I find my excitement in tackling challenges and creating solutions to problems that lie at the intersection of <span className='highlight'>Mathematics</span> and <span className='highlight'>Computer Science</span>. <br /> <br /> </p>
        <h2 className='header'>Programming Languages</h2>
        <div className='programming-languages'>
            <ProgressBar skill={'HTML/CSS:'} skillLevel={8}/>
            <ProgressBar skill={'JavaScript:'} skillLevel={7}/>
            <ProgressBar skill={'Java:'} skillLevel={7}/>
            <ProgressBar skill={'C++:'} skillLevel={5}/>
            <ProgressBar skill={'Python:'} skillLevel={8}/>
        </div>
        <h3 className='header'>Frameworks and Libraries</h3>
        <p className='frameworks'>Some of the Frameworks and Libraries I've worked with:</p>
        <ul className='frameworks'>
          <li>React.JS</li>
          <li>Node.JS</li>
          <li>JavaFX</li>
        </ul>
        <p className="frameworks">I am currently learning Python OpenCV and Pandas.</p>
        <div className='meme-img'><img src="./assets/meme.jpeg" alt="" className='meme' /></div>
      </div>
    </div>
  )
}

export default About
