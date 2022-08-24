import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss';
import{AiOutlineHome} from'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import{MdOutlineDesignServices} from'react-icons/md'
import {BsPerson} from'react-icons/bs'
import{AiOutlineMail} from'react-icons/ai'

import {AiFillLinkedin} from'react-icons/ai'
import{AiFillGithub} from 'react-icons/ai'
import { useState } from 'react';



const Navbar = () => {
  const[activeNav,setActiveNav]=useState('#');
  return (
    <nav className='sidebar'>
      {/* <AiOutlineMenu  className='icon'/> */}
      <ul className='nav-list'>
        <li>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome className='icon'/> <span className='link'>Home</span>  </a>
      </li>
      <li>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'?'active':''}><BsPerson className='icon'/> <span className='link'>About me</span></a>
      </li>
      <li>
      <a href="#experience"  onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><MdWorkOutline className='icon'/><span className='link'>Experience</span></a>
      </li>
      <li>
      <a href="#services"  onClick={()=> setActiveNav('#services')} className={activeNav === '#services'?'active':''}><MdOutlineDesignServices className='icon'/><span >Services</span></a>
      </li>
      <li>
      <a href="#contact"  onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><AiOutlineMail className='icon'/><span >Contact</span></a>
      </li>

      <li>
      <a href="https://www.linkedin.com/in/spmazur/" target="_blank"><AiFillLinkedin className='icon'/></a>
      </li>
      <li>
      <a href="https://github.com/Blejn" target="_blank"><AiFillGithub className='icon'/></a>
      </li>
      </ul>
      <div className='burger'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
        <div className='line4'></div>
        <div className='line5'></div>
        <div className='line-socials'></div>
      </div>
    </nav>
   )
}

export default Navbar