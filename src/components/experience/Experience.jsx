import React from 'react'
import "./experience.scss"
import {BsCheckLg} from "react-icons/bs";
const Experience = () => {
  return (
    <section id='experience'>
    <div className="container header_container">
      <div className='title'>
      <h5>My</h5>
 <h2>Experience</h2>
 </div>

 <div className='experience_content'>
 <div className='experience_cards'>
   <div className="frontend-skills-card">
        <h3>Frontend Development</h3>
        <div className='main-content'>
        <article className="details">
          <div><BsCheckLg className='icon-experience'/><h4>HTML</h4></div>
          <div>
       <BsCheckLg className='icon-experience'/><h4>CSS</h4>
       </div>
       <div>
       <BsCheckLg className='icon-experience'/><h4>Java Script</h4>
       </div>
       <div>
       <BsCheckLg className='icon-experience'/><h4>BOOTSTRAP</h4>
       </div>
       <div>
       <BsCheckLg className='icon-experience'/><h4>REACT</h4>
       </div>
       <div>
       <BsCheckLg className='icon-experience'/><h4>ANGULAR</h4>
       </div>
        </article>
     </div>


   </div>

   <div className='backend-skills-card'>
   <h3>Backend Development</h3>
        <div className='main-content'>
        <article className="details">
        <div>
        <BsCheckLg className='icon-experience'/><h4>JAVA</h4>
        </div>
        <div>
       <BsCheckLg className='icon-experience'/><h4>NODE.JS</h4>
       </div>
       <div>
       <BsCheckLg className='icon-experience'/><h4>MySQL</h4>
       </div>
       
        </article>
        </div>


   </div>
   </div>
 </div>


 </div>
 </section>
  )
}

export default Experience