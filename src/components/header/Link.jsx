import React from 'react'
import resume from '../../assets/cv.pdf'

const link = () => {
  return (
    <div className="link">
        <a href={resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default link