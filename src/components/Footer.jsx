import React from 'react'
import '../footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
function Footer() {
  return (
   <footer className=''>
    <a href="#" className='text-3xl font-bold'>Abdulazeez Abdulrasheed </a>

    <ul className='permalinks lg:flex md:flex justify-center  gap-[2rem]'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials flex justify-center gap-[1rem] ">
      <a href="https://web.facebook.com/people/Abdulrasheed-Abdulazeez/100069702889416/"><FaFacebook className='footer__logo'/></a>
      <a href="https://www.instagram.com/humble_rashie/"><FiInstagram className='footer__logo'/></a>
      <a href="https://www.linkedin.com/in/abdulazeez-abdulrasheed-06064018b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFPQ2QEILT8etdofPuShB8Q%3D%3D" target='_blank'><BsLinkedin className='footer__logo'/></a>
    </div>
    <div className='footer__copyright mb-[4rem] '>
      <small>All rights reserved © Abdulazeez Abdulrasheed 2022</small>
    </div>
   </footer>
  )
}

export default Footer