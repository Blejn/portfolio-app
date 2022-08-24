import React from 'react'
import "./experience.scss"
import Card from '../Card/Card';
import {AiFillHtml5} from'react-icons/ai'
import {FaJava} from'react-icons/fa'
import {BsCheckLg} from "react-icons/bs";
const Experience = () => {
  const frontEndExperience=['HTML','CSS','JavaScript','Bootstrap','React','Angular'];
  const backEndExperience=['Java','Spring Boot', 'Spring','NODE','MySQL','C#']
  return (
    <section id='experience'>
        <div className="container">
            <div className='title'>
       <h5>My</h5>
       <h1>Experience</h1>
       </div>
       <div className='cards_container_experience' > 
        <Card icon={<AiFillHtml5 className="icon_style"/>}  title={"Frontend Experience"} elements={frontEndExperience}/>
        <Card icon={<FaJava className='icon_style'/>} title={"Backend Experience"} elements={backEndExperience}/>
       </div>
      
     
     
       </div> 
   
 </section>
  )
}

export default Experience