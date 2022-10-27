import React, { useState,useEffect,useRef} from 'react'
import Me from "../../src/images/rahie2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "../about.css";
import "../index.css";

// .about__container{
//     display: grid;
//     grid-template-columns: 35% 50%;
//     gap: 15%;
// }

function About() {
  return (
    <section id="about" >
      <h5 className="text-center text-slate-900 dark:text-white ">
        Get to know
      </h5>
      <h2 className="text-center text-cyan-500 dark:text-cyan-400 text-2xl">
        About Me
      </h2>

      <p className=" text-center text-slate-500 dark:text-slate-400 text-sm mt-4 pt-3 pl-3 pr-3  font-serif">
        I create phenomenal experiences that are inclusive and boost revenue for
        the web and beyond. ✌️
      </p>
      <div className="container about__container grid lg:grid-cols-2  lg:gap:0 gap-[5%] place-items-center m-auto mt-1 lg:pl-10  lg:pr-10 p-4">
        <div className="about__me  rounded-sm grid ">
          <div className="about__me-image ">
            <img src={Me} alt="About Image" className="w-[15rem] lg:w-[30rem] md:w-[20rem] h-[20rem]rounded-3xl "/>
          </div>
        </div>

        <div className='about__content  '>
                    <div className='cards grid grid-cols-2 md:grid-cols-3 gap-[1.5rem] '>
                <article className='about__card bg-[#3c3c9e] border-transparent rounded-xl p-[1.5rem] text-center '>
                    <FaAward  className='about__icon m-auto'/>
                    <h5 className="text-white">Experience</h5>
                    <small className="text-slate-300">2 Years Working</small>
                </article>

                <article className='about__card bg-[#3c3c9e] border-transparent rounded-xl p-[1.5rem] text-center'>
                    <FiUsers className='about__icon m-auto'/>
                    <h5 className="text-white">Clients</h5>
                    <small className="text-slate-300">10+ WorldWide</small>
                </article>

                <article className='about__card bg-[#3c3c9e] border-transparent rounded-xl p-[1.5rem] text-center'>
                    <VscFolderLibrary  className='about__icon m-auto'/>
                    <h5 className="text-white">Projects</h5>
                    <small className="text-slate-300">10+ Completed</small>
                </article>

                    </div>
                    <p className=" text-black dark:text-slate-300 pt-4 pb-3 font-serif">I'm that farmboy who codes, I'm a big lover of pets, exotic ones expecially. When i’m not at my system building websites you can find me on the farm breeding rabbits.</p>
                <a href="#contact" className="btn btn-primary"> Let's Talk</a>
                </div>
      </div>
    </section>
  );
}

export default About;
