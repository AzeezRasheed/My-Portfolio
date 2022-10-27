import React from "react";
import { BiCheck } from "react-icons/bi";
import "../services.css";
function Services() {
  return (
    <section id="services">
      <h5></h5>
      <h2></h2>
      <h5 className="text-center text-slate-900 dark:text-white ">
        What I Offer
      </h5>
      <h2 className="text-center text-cyan-500 dark:text-cyan-400 text-2xl pb-3">
        Services
      </h2>
      <div className="container services__container grid grid-col-1 gap-[1rem] lg:gap-[5rem] md:grid-cols-3 lg:grid-cols-3  m-auto p-6 max-w-screen-xl">
        <article className="services  bg-[#3c3c9e] rounded-br-[30px] rounded-bl-[30px] h-[30rem]  ">
          <div className="service__head bg-[#4db5ff] p-[2rem] rounded-br-[30px] rounded-bl-[30px]">
            <h3 className="text-center mb-2rem text-black">UI/UX Design</h3>
          </div>
          <ul className="service__list pl-2 pr-2">
            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Conduct competitor analysis and user research.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Devleop user flows, prototype and wireframes.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p className="">
                Coordinate with UI designer(s) and developer(s).
              </p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p className="">Understanding of information architecture.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p className="">
                Contineously iterate on solutions to make the product
                increasingly effective and delightful for users.
              </p>
            </li>
          </ul>
        </article>

        {/*---End of UI/UX DESIGN------*/}

        <article className="services  bg-[#3c3c9e] rounded-br-[30px] rounded-bl-[30px] h-[35rem]  ">
          <div className="service__head bg-[#4db5ff] p-[2rem] rounded-br-[30px] rounded-bl-[30px] ">
            <h3 className="text-center mb-2rem text-black">Web Development</h3>
          </div>
          <ul className="service__list pl-2 pr-2">
            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7 " />
              <p>Designing user interactions with frontend code.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Ensuring webpages are mobile-optimized.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Creating and maintaining databases and servers.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Designing and developing functioning APIs.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Testing and debugging on both the frontend and backend.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Writing documentation.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>
                Staying up-to-date on new technologies which could improve
                technology and customer experience.
              </p>
            </li>
          </ul>
        </article>

        {/*---End of WEB DEVELOPMENT------*/}
        <article className="services bg-[#3c3c9e] rounded-br-[30px] rounded-bl-[30px] h-[30rem]">
          <div className="service__head bg-[#4db5ff] p-[2rem] rounded-br-[30px] rounded-bl-[30px]">
            <h3 className="text-center mb-2rem text-black">Content Creation</h3>
          </div>
          <ul className="service__list pl-2 pr-2">
            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Search engine optimization (SEO) techniques.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Broad spectrum of content development services.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Landing page optimization.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Landing page optimization.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Photography services.</p>
            </li>

            <li className="flex gap-[1rem] mb-[0.8rem] mt-[20px]">
              <BiCheck className="service__list-icon w-7" />
              <p>Video capture/production services.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
