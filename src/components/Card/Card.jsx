import React from 'react'
import {MdWork} from'react-icons/md'

const Card=({icon,title,elements=[]})=> {
   
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
        </div>
      
    </div>
  )
}

export default Card