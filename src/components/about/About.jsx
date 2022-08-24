import React from 'react'
import './about.scss'
import {FaUniversity} from 'react-icons/fa'
import {MdWork} from'react-icons/md'
import{AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsMusicNote} from 'react-icons/bs'
import {BsFillKeyboardFill} from'react-icons/bs'
import{GiBasketballBall} from'react-icons/gi'

const About = () => {
  const passions=["Producing music","Programming mobile applications ","Basketball"];
  const icons=[<BsMusicNote/>,<BsFillKeyboardFill/>,<GiBasketballBall/>];
  const passionList=passions.map((passion)=>
     <li class="list-group-item">{passion}</li>
  );
  return (
    <section id='about'>
     
       <div className="container">
       
       <h5>All</h5>
       <h1>About me</h1>
      
       <div className='cards_container'>
      <div className='card'>
        <div className='card-icon-title'>
        <div className='icon_card'>
          <MdWork   size={20}/>
        </div>
        <div className='card-title'>
        <h4>Passion</h4>
        </div>
        </div>
        <div className='card-text'>
        <ul class="list-group">
        
         {passionList.map((passion)=>{
          return(<li>{passion}</li>)
         })}
        </ul>





        </div>
        </div>
      <div className='card'>
      <div className='card-icon-title'>
      <div className='icon_card'>
        <FaUniversity  size={20}/>
        </div>
        <div className='card-title'>
        <h4>Education</h4>
        </div>
        </div>
        <div className='card-text'>









        </div>
        </div>
      <div className='card'>
      <div className='card-icon-title'>
      <div className='icon_card'>
        <AiOutlineFundProjectionScreen  size={20}/>
        </div>
        <div className='card-title'>
        <h4>Projects</h4>
        </div>
        </div>
<div className='card-text'>





  
</div>


        </div>
       
       </div>
      
     
     
       </div> 
   
    
    </section>
  )
}

export default About