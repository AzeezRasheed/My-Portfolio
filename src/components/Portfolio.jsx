import React from "react";
import PINVENTORY from "../assets/pinventory.PNG";
import NetflixClone from "../assets/NetflixClone2.PNG";
import LotteryLife from "../assets/lottery-life.PNG";
import GroceryBud from "../assets/GroceryBud.PNG";
import RoyalPath from "../assets/RoyalPath.PNG";
import MetaBnb from "../assets/MetaBnb.PNG";
import "../portfolio.css";
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
            <img src={PINVENTORY} className="portfolio__item__image" alt="" />
          </div>
          <h3 className="portfolio__h3">MERN STACK P-INVENTORY APP</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AzeezRasheed/Mern-Stack-Inventory-App"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://rashie-mern-stack-inventory-app.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem] ">
          <div>
            <img
              src={NetflixClone}
              className="portfolio__item__image "
              alt=""
            />
          </div>
          <h3 className="portfolio__h3">NETFLIX CLONE</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AzeezRasheed/Netflix-Clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://rashie-netflix-clone.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem] ">
          <div>
            <img src={GroceryBud} className="portfolio__item__image" alt="" />
          </div>
          <h3 className="portfolio__h3">GROCERY BUD MERN STACK</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AzeezRasheed/Grocery-Bud-MERN-Stack"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://grocery-bud-mern-stack.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem] ">
          <div>
            <img src={RoyalPath} className="portfolio__item__image" alt="" />
          </div>
          <h3 className="portfolio__h3">ROYAL PATH TRANSPORT</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AzeezRasheed/Royal_Path"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://royal-path.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem] ">
          <div>
            <img src={MetaBnb} className="portfolio__item__image" alt="" />
          </div>
          <h3 className="portfolio__h3">META BNB</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AzeezRasheed/ZuriFrontendStage3Task"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://zuri-frontend-stage3-task.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__items bg-[#3c3c9e] p-[1.3rem] ">
          <div>
            <img src={LotteryLife} className="portfolio__item__image" alt="" />
          </div>
          <h3 className="portfolio__h3">{"{"}LotteryLife</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AzeezRasheed/lottery-life"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://lottery-life.vercel.app/"
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
