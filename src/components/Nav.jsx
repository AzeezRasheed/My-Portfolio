import React, { useState,useEffect,useRef} from 'react'
import '../nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
function Nav() {
    const [activeNav, setActiveNav] = useState('#')

   
    let home = document.querySelector('#home')
    let about = document.querySelector('#about')
    let experience = document.querySelector('#experience')
    let service = document.querySelector('#services')
    let contact = document.querySelector('#contact')
    
    window.addEventListener('scroll', (e) => {
        var window = e.currentTarget.scrollTop;
        var offsetTop = e.currentTarget.offsetTop;
        if(service.offsetTop === window && about.offsetTop > window){
            console.log('services')
        }
    })
   
    return (

        <nav >
            <a href="#" onClick={() => { setActiveNav('#') }} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
            <a href="#about" onClick={() => { setActiveNav('#about') }} className={activeNav === '#about' ? 'active' : '' } ><AiOutlineUser /></a>
            <a href="#experience" onClick={() => { setActiveNav('#experience') }} className={activeNav === '#experience' ? 'active' : ''} ><BiBook /></a>
            <a href="#services" onClick={() => { setActiveNav('#services') }} className={activeNav === '#services' ? 'active' : ''} ><RiServiceLine /></a>
            <a href="#contact" onClick={() => { setActiveNav('#contact') }} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail /></a>

        </nav>

    
    )
}

export default Nav