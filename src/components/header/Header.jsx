import React from 'react'
import "./header.scss";
import CTA from './CallToAction'
import ME from'../../assets/avatar.png'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'


const Header = () => {
  return (
    
    <section id='header'>
       <div className="container header_container">
       
       <h5>Hello I'm</h5>
       <h1>Sebastian Mazur</h1>
       <h5 className="text-light" >
          Junior Web Developer
       </h5>
       <div className='me'>
         <img src={ME} alt="me" />
       </div>
       <a href="#contact" className='scroll_down'><BsFillArrowDownSquareFill className='arrow_down'/></a>
       <CTA/>
     
       </div> 
    </section>
  )
}

export default Header