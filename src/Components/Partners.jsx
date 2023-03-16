import React from "react";
import Discription from "./Discription";
import moneyGram from "../assets/moneyGram.png";
import ria from "../assets/ria.png";
import worldRemit from "../assets/worldRemit.png";
import westernUnion from "../assets/westernUnion.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "../App.css";

import { Autoplay } from "swiper";
import PartnersLogos from "./PartnersLogos";

const Partners = () => {
  return (
    <div
      id="Partners"
      className="bg-black lg:px-52 md:px-14 px-5 py-16"
      color="text-white"
    >
      <Discription
        name="Our Partners"
        heading="Our Partners Programs"
        message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente,
        mollitia optio minima laudantium maiores facilis molestiae voluptas
        iste cum laboriosam officia eos. Maxime, minima! Perferendis tempora
        quis provident"
      />

      <Swiper
        slidesPerView={"3"}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay]}
        className=".swiper pt-14 pb-8"
      >
        <SwiperSlide>
          <PartnersLogos logo={worldRemit} />
        </SwiperSlide>
        <SwiperSlide>
          <PartnersLogos logo={ria} />
        </SwiperSlide>
        <SwiperSlide>
          <PartnersLogos logo={westernUnion} />
        </SwiperSlide>
        <SwiperSlide>
          <PartnersLogos logo={moneyGram} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
