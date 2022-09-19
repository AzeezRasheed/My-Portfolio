import React from "react";
import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import Avatar4 from "../images/avatar4.jpg";
import "../testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    avatar: Avatar1,
    name: "Azeez Lukman",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Assumenda dicta quam similique nostrum reiciendis. Distinctio,assumenda dolorem. Facilis minima beatae impedit debitis at.Natus, sint? Aut iure recusandae ut dicta?",
  },
  {
    avatar: Avatar2,
    name: "Fawas Kareem",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Assumenda dicta quam similique nostrum reiciendis. Distinctio,assumenda dolorem. Facilis minima beatae impedit debitis at.Natus, sint? Aut iure recusandae ut dicta?",
  },
  {
    avatar: Avatar3,
    name: "Ridwan Kareem",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Assumenda dicta quam similique nostrum reiciendis. Distinctio,assumenda dolorem. Facilis minima beatae impedit debitis at.Natus, sint? Aut iure recusandae ut dicta?",
  },
  {
    avatar: Avatar4,
    name: "Hakeem Kazeem",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Assumenda dicta quam similique nostrum reiciendis. Distinctio,assumenda dolorem. Facilis minima beatae impedit debitis at.Natus, sint? Aut iure recusandae ut dicta?",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5 className="text-center text-slate-900 dark:text-white ">
        Review from clients
      </h5>
      <h2 className="text-center text-cyan-500 dark:text-cyan-400 text-2xl pb-10">
        Testimonials
      </h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        sliderPerView={1}
        spaceBetween={40}
      
      className="myswiper  w-[18rem] lg:w-[30rem]  md:w-[30rem] m-auto">
        {data.map(({avatar,name,review},index) => (
      <SwiperSlide key={index} className="testimonial text-center p-[2rem] rounded-[2rem]">
      <div>
        <img src={avatar} alt="" className="client__avatar rounded-full w-32 m-auto"/>
      
      </div>
      <h5 className=" text-cyan-500 dark:text-cyan-400 ">
         {name}
        </h5>
        <small className="client__review text-cyay-800 block text-cyan-100 w-[15rem] lg:w-[25rem] md:w-[25rem] text-center ">
          {review}
        </small>
    </SwiperSlide>


        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
