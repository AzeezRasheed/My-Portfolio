import React from 'react'
import CV from '../assets/Abdulazeez Abdulrasheed Resume New.pdf'

function CTA() {
 
  return (
    <div className='cta mt-10 flex gap-6 justify-center'>
    
    <a href={CV} className='btn btn-secondary'>Download Cv</a>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA


