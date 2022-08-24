import React from 'react'
import "./services.scss"
import{MdDoneOutline} from 'react-icons/md'
const Services = () => {
  return (
    <section id='services'>
<div className="container header_container">
      <div className='title'>
      <h5>My</h5>
 <h2>Skills</h2>
 </div>
 <div className='services-articles'>
<article className='service-card'>
<div className='service-title'>
 <h4>Graphic design</h4>
 </div>
<ul className='service-graphic'>
<li className='list-item'> <MdDoneOutline className="service_icon"/>Creating album covers</li>
<li className='list-item'><MdDoneOutline className="service_icon"/>Designing website graphics</li>
<li className='list-item'><MdDoneOutline className="service_icon"/>Adobe Photoshop</li>
<li className='list-item'><MdDoneOutline className="service_icon"/>Adobe Premiere</li>
</ul>
</article>

<article className='service-card'>
<div className='service-title'>
<h4>Web-development</h4>
 </div>
<ul className='service-web'>
<li className='list-item'><MdDoneOutline className="service_icon"/>Building responsive websites</li>
<li className='list-item'><MdDoneOutline className="service_icon"/>Clean code</li>
<li className='list-item'><MdDoneOutline className="service_icon"/>Building a good quality application
</li>
<li className='list-item'><MdDoneOutline className="service_icon"/>Taking care of every detail
</li>
<li className='list-item'><MdDoneOutline className="service_icon"/>Team working ability 
</li>
</ul>
</article>
</div>
 </div>
    </section>
    
  )
}

export default Services