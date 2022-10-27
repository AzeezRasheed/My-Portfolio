import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import "../header.css"

function HeaderSocials() {
    return (
        <div className='header__socials   '>
            <a className=' dark:bg-slate-300 dark:hover:bg-sky-700 ]' href="https://www.linkedin.com/in/abdulazeez-abdulrasheed-06064018b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFPQ2QEILT8etdofPuShB8Q%3D%3D" target='_blank'> <BsLinkedin /></a>
            <a className=' dark:bg-slate-300 dark:hover:bg-sky-700' href="https://github.com/AzeezRasheed"  target='_blank'><FaGithub /></a>
            <a className=' dark:bg-slate-300 dark:hover:bg-sky-700' href="https://www.instagram.com/humble_rashie/"  target='_blank'><FiInstagram /></a>
        </div>
    )
}

export default HeaderSocials
