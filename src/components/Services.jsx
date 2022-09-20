import React from 'react'
import {BiCheck} from 'react-icons/bi'
import '../services.css'
function Services() {
  return (
    <section id='services'>
        <h5></h5>
        <h2></h2>
        <h5 className="text-center text-slate-900 dark:text-white ">
        What I Offer
      </h5>
      <h2 className="text-center text-cyan-500 dark:text-cyan-400 text-2xl pb-3">
      Services
      </h2>
        <div className='container services__container grid grid-col-1 gap-[1rem] lg:gap-[5rem] md:grid-cols-3 lg:grid-cols-3  m-auto p-6 max-w-screen-xl'>
            <article className="services  bg-[#3c3c9e] rounded-br-[30px] rounded-bl-[30px] h-96  ">
                <div className="service__head bg-[#4db5ff] p-[2rem] rounded-br-[30px] rounded-bl-[30px]">
                    <h3 className='text-center mb-2rem text-black'>UI/UX Design</h3>
                    
                </div>
                <ul className='service__list pl-2 pr-2'>
                    
                        <li className='flex gap-[1rem] mb-[0.8rem] mt-[20px]'>
                        <BiCheck className='service__list-icon w-7'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a.</p>
                        </li>

                        <li className='flex gap-[1rem] mb-[0.8rem] mt-[20px]'>
                        <BiCheck className='service__list-icon w-7'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a.</p>
                        </li>

                        <li className='flex gap-[1rem] mb-[0.8rem] mt-[20px]'>
                        <BiCheck className='service__list-icon w-7'/>
                       <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a.</p>
                        </li>

                       
                </ul>
            </article>

            {/*---End of UI/UX DESIGN------*/}

            <article className="services  bg-[#3c3c9e] rounded-br-[30px] rounded-bl-[30px] h-[30rem]  ">
            <div className="service__head bg-[#4db5ff] p-[2rem] rounded-br-[30px] rounded-bl-[30px] ">
                    <h3 className='text-center mb-2rem text-black'>Web Development</h3>
                    
                </div>
                <ul className='service__list pl-2 pr-2'>
                    
                        <li className='flex gap-[1rem] mb-[0.8rem] mt-[20px]'>
                        <BiCheck className='service__list-icon w-7 '/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a.</p>
                        </li>

                        <li className='flex gap-[1rem] mb-[0.8rem] mt-[20px]'>
                        <BiCheck className='service__list-icon w-7'/>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a.</p>
                        </li>

                        <li className='flex gap-[1rem] mb-[0.8rem] mt-[20px]'>
                        <BiCheck className='service__list-icon w-7'/>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a.</p>
                        </li>

                        <li className='flex gap-[1rem] mb-[0.8rem] mt-[20px]'>
                        <BiCheck className='service__list-icon w-7'/>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a.</p>
                        </li>
                </ul>

               
            </article>

              {/*---End of WEB DEVELOPMENT------*/}
              <article className="services bg-[#3c3c9e] rounded-br-[30px] rounded-bl-[30px] h-96">
              <div className="service__head bg-[#4db5ff] p-[2rem] rounded-br-[30px] rounded-bl-[30px]">
                    <h3 className='text-center mb-2rem text-black'>Content Creation</h3>
                    
                </div>
                <ul className='service__list pl-2 pr-2'>

                        <li className='flex gap-[1rem] mb-[0.8rem] mt-[20px]'>
                        <BiCheck className='service__list-icon w-7'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a.</p>
                        </li>

                        <li className='flex gap-[1rem] mb-[0.8rem] mt-[20px]'>
                        <BiCheck className='service__list-icon w-7'/>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a.</p>
                        </li>

                        <li className='flex gap-[1rem] mb-[0.8rem] mt-[20px]'>
                        <BiCheck className='service__list-icon w-7'/>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a.</p>
                        </li>
                </ul>
            </article>

              
        </div>
    </section>
  )
}

export default Services