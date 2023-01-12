import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "../experience.css";
function Experience() {
  return (
    <section id="experience">
      <h5 className="text-center text-slate-900 dark:text-white ">
        Skills I Have
      </h5>
      <h2 className="text-center text-cyan-500 dark:text-cyan-400 text-2xl pb-3">
        My Experience
      </h2>
      <div className="container experience__container grid grid-col-1 gap-8 md:grid-cols-2 lg:grid-cols-2 p-4 m-auto max-w-screen-xl ">
        <div className="experience p-4 ">
          <h3>FrontEnd Development</h3>
          <div className="experience__content cards grid grid-cols-2  gap-[1.5rem]  ">
            <article className="experience__details  flex gap-4 ">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">HTML</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">CSS</h4>
                <small className="text-light text-slate-300">
                  Intermidiate
                </small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">JavaScript</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">BootStrap</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">TailWind</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">ReactJs</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">NextJs</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">Git and Github</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">React Native</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">REST API</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience p-4">
          <h3>Backend Development</h3>
          <div className="experience__content cards grid grid-cols-2  gap-[1.5rem]">
            <article className="experience__details  flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">NodeJs</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">ExpressJs</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">Python</h4>
                <small className="text-light text-slate-300">
                  Intermidiate
                </small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">MYSQL</h4>
                <small className="text-light text-slate-300">
                  Intermidiate
                </small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">MongoDB</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>

            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                {" "}
                <h4 className="text-white">Web Hosting Platforms</h4>
                <small className="text-light text-slate-300">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
