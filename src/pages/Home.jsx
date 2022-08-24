import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from'../components/header/Header'
import About from'../components/about/About'
import Contact from'../components/contact/Contact'
import Experience from'../components/experience/Experience'
import Footer from'../components/footer/Footer'
import Portfolio from'../components/portfolio/Portfolio'
import Services from'../components/services/Services'


const Home = () => {
  return (
    <div>
   
    <Navbar />
  
  
    <Header/>
   
    
    <About/>
    
    <Experience/>
   
    <Services/>
    
    <Portfolio/>

    <Contact/>
  
    <Footer/>
  
    
    </div>
  )
}

export default Home