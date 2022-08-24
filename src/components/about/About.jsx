import React from 'react'
import './about.scss'
import {FaUniversity} from 'react-icons/fa'
import {MdWork} from'react-icons/md'
import Card from'../Card/Card'
import{AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsMusicNote} from 'react-icons/bs'
import {BsFillKeyboardFill} from'react-icons/bs'
import{GiBasketballBall} from'react-icons/gi'

const About = () => {
  const passions=["Producing music","Programming mobile applications ","Basketball"];
  const education=['University of Economics in Katowice','Coders Lab','II Secondary School named after Andrzej Frycz Modrzewski in Rybnik']
  const beats=['weather-app', 'beat-shop-app', 'chat-messenger-app']
  const icons=[<BsMusicNote/>,<BsFillKeyboardFill/>,<GiBasketballBall/>];
  
  return (
    <section id='about'>
     
       <div className="container">
          <div className='title'>
       <h5>All</h5>
       <h1>About me</h1>
       </div>
       <div className='cards_container'> 
        <Card icon={<MdWork className='icon_style'/>} title={"Passion"} elements={passions}/>
        <Card icon={<FaUniversity className='icon_style'/>} title={"Education"} elements={education}/>
        <Card icon={<AiOutlineFundProjectionScreen className='icon_style'/>} title={"Projects"} elements={beats}/>
 
       </div>
      
     
     
       </div> 
   
    
    </section>
  )
}

export default About