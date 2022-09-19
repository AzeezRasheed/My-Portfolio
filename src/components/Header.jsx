import React from 'react'
import CTA from './CTA'
import Me from '../../src/images/rashie3.jpg'
import HeaderSocials from './HeaderSocials'
// import '../header.css'
function Header() {
  return (
  <header className=' pt-20 overflow-hidden   '>
      <div className="  h-full relative flex flex-col   items-center ">
          
          <div className='  text-center  '>
          <h5 className=' text-slate-500 dark:text-slate-400'>Hello I'm</h5>
          <h1 className='text-slate-900 dark:text-slate-50'>Abdulazeez Abdulrasheed</h1>
          <h5 className='text-cyan-500 dark:text-cyan-400 '> Frontend Developer</h5>
             </div>
          <CTA/>
          <HeaderSocials/>
          <div  className='mee'>
              <img src={Me} alt="me" className='me lg:w-[20rem] md:w-[17rem] w-[15rem] h-[20rem] lg:h-[25rem] md:h-[25rem] overflow-hidden mt-[4rem] rounded-tl-full rounded-tr-full ' />
          </div>
          <a href="#contact" className='scroll__down text-cyan-500 dark:text-cyan-400   ;'>Scroll Down</a>
      </div>
  </header>
  )
}

export default Header

/*
    
    width: 22rem;
    height: 30rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    overflow:hidden;
    padding: 5rem 1.5rem 1.5rem 1.5rem ;

*/ 