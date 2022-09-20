import React from "react";
import Me from "../images/lide.jpg";
import '../portfolio.css'
function Portfolio() {
  return (
    <section id="portfolio">
      <h5 className="text-center text-slate-900 dark:text-white ">
        My Recent Work
      </h5>
      <h2 className="text-center text-cyan-500 dark:text-cyan-400 text-2xl pb-3">
        Portfolio
      </h2>

      <h2></h2>

      <div className="p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[2.5rem] m-auto max-w-screen-xl">
        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem]">
          <div>
            <img src={Me} className='portfolio__item__image' alt="" />
          </div>
          <h3 className='portfolio__h3'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>

        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem] ">
          <div>
            <img src={Me} className='portfolio__item__image' alt="" />
          </div>
          <h3 className='portfolio__h3'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>

        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem] ">
          <div>
            <img src={Me} className='portfolio__item__image' alt="" />
          </div>
          <h3 className='portfolio__h3'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>

        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem] ">
          <div>
            <img src={Me} className='portfolio__item__image' alt="" />
          </div>
          <h3 className='portfolio__h3'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>

        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem] ">
          <div>
            <img src={Me} className='portfolio__item__image' alt="" />
          </div>
          <h3 className='portfolio__h3'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>

        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem] ">
          <div>
            <img src={Me} className='portfolio__item__image' alt="" />
          </div>
          <h3 className='portfolio__h3'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
