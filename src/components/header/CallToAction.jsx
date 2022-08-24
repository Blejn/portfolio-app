import React from 'react'
import CV from '../../assets/SebastianMazurCV.pdf'

const CallToAction = () => {
  return (
    <div className="callToAction">
        <a href={CV} download className='btn'>My CV</a>
        
    </div>
  )
}

export default CallToAction