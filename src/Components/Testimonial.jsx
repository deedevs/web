import React, { useRef, useState } from "react";
import logo from "../assets/logo.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import TestimonialCard2 from "./TestimonialCard2";
import Discription from "./Discription";

const Testimonial = () => {
  return (
    <div id="Testimonial" className="my-16">
      <Discription
        name="Client Opinion"
        heading="What Users Say About Us"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, tempora ipsum aperiam, quibusdam atque aut voluptatem nostrum architecto inventore temporibus iste harum sint sit beatae accusamus tempore officia unde consectetur adipisicing elit. Numquam, tempora ipsum aperiam, quibusdam atque aut voluptatem consectetur adipisicing elit. Numquam, tempora ipsum aperiam, quibusdam atque aut voluptatem vel."
      />
      <Swiper
        slidesPerView={"2"}
        spaceBetween={20}
        autoplay={{
          delay: 1500,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className=".swiper"
      >
        <SwiperSlide className="z-[1]">
          <TestimonialCard2
            image={logo}
            name="Peter Junior"
            role="Developer"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
        tempora."
          />
        </SwiperSlide>
        <SwiperSlide className="z-[1]">
          <TestimonialCard2
            image={logo}
            name="David None"
            role="Developer"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
        tempora."
          />
        </SwiperSlide>
        <SwiperSlide className="z-[1]">
          <TestimonialCard2
            image={logo}
            name="Yuspha Darboe"
            role="Developer"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
        tempora."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard2
            image={logo}
            name="Omar Jeng"
            role="Developer"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
        tempora."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard2
            image={logo}
            name="Ousman Touray"
            role="Developer"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
        tempora."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
