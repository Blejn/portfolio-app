import React from 'react'
import {MdWork} from'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'

const Card_Project=({icon,title,elements=[],link})=> {
   
  return (
    <div>
        <div className='card'>
        <div className='card-icon-title'>
        <div className='icon_card'>
          {icon}
        </div>
        <div className='card-title'>
        <h4>{title}</h4>
        </div>
        </div>
        <div className='card-text'>
        <ul class="list-group">
        
         {elements.map((element)=>{
            return(
                <li class="list-group-item">{element}</li>
            
            )
         })}
        </ul>





        </div>

       <div className=''>
       <div className=''>
          <a href={link}>  
        <AiOutlineLink className="link-icon"/>
        </a>
        </div>



        </div>
        </div>
      
    </div>
  )
}

export default Card_Project