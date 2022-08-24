import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from'../components/header/Header'
import About from'../components/about/About'
import Contact from'../components/contact/Contact'
import Experience from'../components/experience/Experience'
import Footer from'../components/footer/Footer'
import Portfolio from'../components/portfolio/Portfolio'
import Services from'../components/services/Services'
import Project  from '../components/Projects/Project'

const Home = () => {
  return (
    <div>
   
    <Navbar />
  
  
    <Header/>
   
    
    <About/>
    
    <Experience/>
   
    <Services/>
    

    <Project/>

    <Contact/>

  

  
    
    </div>
  )
}

export default Home