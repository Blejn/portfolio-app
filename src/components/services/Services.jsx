import React from 'react'
import "./services.scss"
import Card from '../Card/Card'
import {MdWebAsset} from'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import{MdDoneOutline} from 'react-icons/md'
const Services = () => {
  const skills=['Creating album covers','Designing website graphics','editing images in Adobe Photoshop','editing video Adobe Premiere',"Figma"]
 const web=['Building responsive websites','Clean code','Building a good quality application','Taking care of every detail','Team working ability'];
  return (
    <section id='services'>
  <div className="container">
    <div className='title'>
       <h5>My</h5>
       <h1>Skills</h1>
       </div>
       <div className='cards_container_experience'> 
        <Card icon={<GiSkills className="icon_style"/>}  title={"Graphic Skills"} elements={skills}/>
        <Card icon={<MdWebAsset className='icon_style'/>} title={"Web-dev skills"} elements={web}/>
       </div>
      
     
     
       </div> 
   
    </section>
    
  )
}

export default Services