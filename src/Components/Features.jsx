import React from "react";
import { FeaturesCard } from "./FeaturesCard";
const Features = () => {
  return (
    <div
      className="bg-white text-black lg:px-52 md:px-14 px-5 py-24"
      id="Features"
    >
      <div className="md:flex w-full justify-between ">
        <div
          data-aos="flip-left"
          className=" md:w-1/2 md:grid md:grid-cols-2 md:grid-rows-2 gap-10 mt-16 space-y-8 md:space-y-0"
        >
          <FeaturesCard
            icon="fa-money-bill-transfer"
            heading="24/7 hours Service"
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              tempore in inventore."
          />
          <FeaturesCard
            icon="fa-money-bill-transfer"
            heading="Fast Transfer"
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              tempore in inventore quis."
          />
          <FeaturesCard
            icon="fa-money-bill-transfer"
            heading="Low Cost"
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              tempore in inventore."
          />
          <FeaturesCard
            icon="fa-money-bill-transfer"
            heading="Trusted Service"
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              tempore in inventore."
          />
        </div>
        <div className="md:w-1/2 py-6 text-center md:text-start md:ml-10 md:mt-32 lg:mt-24 xxl:mt-20">
          <h2
            data-aos="slide-down"
            className="text-2xl md:text-4xl text-[#daa520] pb-5"
          >
            The Secure, Easiest And Fastest Money Transfer.
          </h2>
          <p
            data-aos="slide-left"
            className="leading-6 text-sm md:text-base text-gray-500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            rerum ipsam nemo, perspiciatis debitis quisquam dolore neque eveniet
            vitae quod iure in magnam quibusdam possimus? Natus repellendus
            suscipit labore dolore? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Eum beatae nemo illo qui velit fuga magnam vel
            nihil sint alias aut harum, ipsam, numquam repellat adipisci
            deserunt maiores animi dolor.
          </p>
          <button
            data-aos="slide-up"
            className="mt-8 px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full border bg-[rgb(218,165,32)]  text-white font-medium hover:border hover:border-[#daa520] hover:bg-white hover:text-black"
          >
            Discover now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
