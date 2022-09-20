import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import "../contact.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zmgydth', 'template_16kvik4', form.current, 'ZnNXP6T6IbRh0cxb8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id="contact">
      <h5 className="text-center text-slate-900 dark:text-white ">
        Get In Touch
      </h5>
      <h2 className="text-center text-cyan-500 dark:text-cyan-400 text-2xl pb-3">
        Contact Me
      </h2>

      <div className="">
    <div className=" max-w-screen-xl  m-auto ">
 
        <div className="contact__container grid grid-col-1 gap-8 md:grid-cols-2 lg:grid-cols-2  p-4    ">
        <div className=" flex flex-col gap-3  ">
          <article className="contact__option bg-[#3c3c9e]  rounded-[1.2rem] text-center p-6 ">
            <MdOutlineEmail className="content__option m-auto mb-2 " />
            <h4 className="text-white"> Email</h4>
            <h5 className="text-slate-300 mb-3">rayshmanazeez@gmail.com</h5>
            <a
              href="mailto:rayshmanazeez@gmail.com "
              target="_blank"
              className="text-cyan-500 dark:text-cyan-400 inline-block  text-[0.8rem]"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option bg-[#3c3c9e]  rounded-[1.2rem] text-center p-6">
            <RiMessengerLine className="content__option m-auto mb-2 " />
            <h4 className="text-white"> Messanger</h4>
            <h5 className="text-slate-300 mb-3">Abdulazeez Abdulrasheed</h5>
            <a
              href="https://m.me/Abdulrasheed-Abdulazeez "
              target="_blank"
              className="text-cyan-500 dark:text-cyan-400 inline-block  text-[0.8rem]"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option bg-[#3c3c9e]  rounded-[1.2rem] text-center p-6">
            <BsWhatsapp className="content__option m-auto mb-2 " />
            <h4 className="text-white"> WhatsApp</h4>
            <h5 className="text-slate-300 mb-3">+2347036874722</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2347036874722 "
              target="_blank"
              className="text-cyan-500 dark:text-cyan-400 inline-block  text-[0.8rem]"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-[1.2rem]   ">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
className="dark:text-white "
          />
          <input type="text" name="email" placeholder="Your Email" required className="dark:text-white "/>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            className="w-10rem dark:text-white"
          ></textarea>

          <div>
            {" "}
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>{" "}
          </div>
        </form>
        </div>
      </div>

      </div>
    </section>
  );
}

export default Contact;
