import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Client 1",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore corrupti numquam sequi facere, nam cum tempora ea quas porro atque aut rem voluptas reiciendis laudantium vero aliquam at beatae!",
  },
  {
    avatar: AVTR2,
    name: "Client 2",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore corrupti numquam sequi facere, nam cum tempora ea quas porro atque aut rem voluptas reiciendis laudantium vero aliquam at beatae!",
  },
  {
    avatar: AVTR3,
    name: "Client 3",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore corrupti numquam sequi facere, nam cum tempora ea quas porro atque aut rem voluptas reiciendis laudantium vero aliquam at beatae!",
  },
  {
    avatar: AVTR4,
    name: "Client 4",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore corrupti numquam sequi facere, nam cum tempora ea quas porro atque aut rem voluptas reiciendis laudantium vero aliquam at beatae!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Rewiew from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
