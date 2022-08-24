import React from 'react'
import {Swiper,SwiperSlide}from 'swiper/react'
import Card from '../Card/Card'
import { useSwiper } from 'swiper/react';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card_Project from '../Card/Card_project';





const Project = () => {
  var size = window.matchMedia("(max-width: 1024px)")

const portfolioSkills=["React Hooks", "Swiper"]
const beatshopSkills=["React Hooks", "React-router"]
const todoSkills=["React Hooks", "Chakra UI","Local-storage"]
const crudAppSkills=["React Hooks", "Chakra UI","Axios", "Json-server"]
const weatherSkills=["React Hooks"]
  const swiper = useSwiper();
  return (
        <section id='project'>
      <div className='title'>
       <h5>My</h5>
       <h1>Projects</h1>
       </div>


       { size.matches ? 
       (
   <div className="container">
         <Swiper

      spaceBetween={50}
      slidesPerView={1}
       navigation
       //pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => swiper.slideNext()}
      // onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
       <Card_Project icon={<AiOutlineFundProjectionScreen className="icon_style"/>}  title={"Beat shop"} elements={beatshopSkills} link={"https://beatshop-cc9bd.web.app"}/>
            </SwiperSlide>
               <SwiperSlide>
        <Card_Project icon={<AiOutlineFundProjectionScreen className="icon_style"/>}  title={"Weather app"} elements={weatherSkills} link ={"https://weather-app-48add.web.app"}/>
            </SwiperSlide>
               <SwiperSlide>
            <Card_Project icon={<AiOutlineFundProjectionScreen className="icon_style"/>}  title={"Portfolio"} elements={portfolioSkills} link ={""}/>
            </SwiperSlide>
               <SwiperSlide>
             <Card_Project icon={<AiOutlineFundProjectionScreen className="icon_style"/>}  title={"crud-app"} elements={crudAppSkills}/>
            </SwiperSlide>
                  <SwiperSlide>
             <Card_Project icon={<AiOutlineFundProjectionScreen className="icon_style"/>}  title={"Todo-app"} elements={todoSkills}link={"https://todo-app-abfbd.web.app"}/>
            </SwiperSlide>
            



     </Swiper>


       </div> 
       ):(
      <div className="container">
         <Swiper

      spaceBetween={50}
      slidesPerView={3}
       navigation
       //pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => swiper.slideNext()}
      // onSlideChange={() => console.log('slide change')}
    >
          <SwiperSlide>
       <Card_Project icon={<AiOutlineFundProjectionScreen className="icon_style"/>}  title={"Beat shop"} elements={beatshopSkills} link={"https://beatshop-cc9bd.web.app"}/>
            </SwiperSlide>
               <SwiperSlide>
        <Card_Project icon={<AiOutlineFundProjectionScreen className="icon_style"/>}  title={"Weather app"} elements={weatherSkills} link ={"https://weather-app-48add.web.app"}/>
            </SwiperSlide>
               <SwiperSlide>
            <Card_Project icon={<AiOutlineFundProjectionScreen className="icon_style"/>}  title={"Portfolio"} elements={portfolioSkills}/>
            </SwiperSlide>
               <SwiperSlide>
             <Card_Project icon={<AiOutlineFundProjectionScreen className="icon_style"/>}  title={"crud-app"} elements={crudAppSkills}/>
            </SwiperSlide>
                  <SwiperSlide>
             <Card_Project icon={<AiOutlineFundProjectionScreen className="icon_style"/>}  title={"Todo-app"} elements={todoSkills}/>
            </SwiperSlide>
            
            



     </Swiper>


       </div> 
       )
}
    </section>
  )
}
export default Project
