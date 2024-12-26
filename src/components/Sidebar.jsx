import React from 'react';
import './SidebarStyle.css';
import TypeWriter from './TypeWriter';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md"
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div className='sidebar-container'>
      <div className='sidebar-content'>
        <div className='sidebar-content-profile'>
          <img src="/assets/portfolioImg.jpg" className='profile-img'/>
          <div className='profile-text'>
            <h1 className="profile-name"> <TypeWriter 
                text={'Emmanuel Axel Ndayiragije'} 
                delay={90} 
                follower={false}
                color={"yellow"}/></h1>
            <p className="profile-description">Mathematics|Computer Science</p>
          </div>
        </div>
        <div className="profile-socials">
          <a href='https://www.google.com/maps/place/Ottawa' target='blank' className='links'>
            <FaMapLocationDot className='location-logo'/> Ottawa, ON
          </a>
          <a href="mailto:ardentaxeldev@gmail.com" target='blank'>
            <MdOutlineMailOutline className='email-logo'/> Email
          </a>
          <a href="https://www.linkedin.com/in/eandayiragije/" target='blank'>
            <FaLinkedin className='linkedin-logo'/> Linkedin
          </a>
          <a href="https://github.com/ardentaxel" target='blank'>
            <FaGithub className='github-logo'/>Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
