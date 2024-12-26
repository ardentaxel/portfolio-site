import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavbarStyles.css';
import { useRef } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md"




    
const Navbar = () => {
    const location = useLocation(); 

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navRef = useRef();
    

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
        <>
            <header className='header header-nav'>
                
                <NavLink to='/' className='logo'>&lt;ardentaxelDev/&gt;</NavLink>
                <nav ref={navRef} className='nav-menu'>
                    <NavLink to='/' className={`nav-links ${isActive('/about') ? 'active': 'inactive'}`} onClick={showNavbar}>About Me</NavLink>
                    <NavLink to='/resume' className={`nav-links ${isActive('/resume') ? 'active': 'inactive'}`} onClick={showNavbar}>My Resume</NavLink>
                    <NavLink to='/projects' className={`nav-links ${isActive('/projects') ? 'active': 'inactive'}`} onClick={showNavbar}>Projects</NavLink>
                    {/* <NavLink to='/blog' className={`nav-links ${isActive('/blog') ? 'active': 'inactive'}`} onClick={showNavbar}>Blog</NavLink>
                    <NavLink to='/contact' className={`nav-links ${isActive('/contact') ? 'active': 'inactive'}`} onClick={showNavbar}>Contact Me</NavLink> */}
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                    <div className="profile-socials-nav">
                        <a href='https://www.google.com/maps/place/Ottawa' target='blank'>
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
                </nav>
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars/>
                </button>
            </header>
        </>
    )
}

export default Navbar
