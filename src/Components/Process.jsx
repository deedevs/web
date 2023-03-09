import React from "react";
import process from "../assets/process.png";

const Process = () => {
  return (
    <div
      id="Process"
      className={`bg-black lg:px-52 md:px-14 px-5 py-16 ${
        open ? "z-[-2]" : "z-10"
      }`}
    >
      <div className="md:flex w-full md:gap-x-24">
        <div
          data-aos="zoom-out-left"
          className="md:w-1/2 md:order-2 px-14 py-6 my-auto"
        >
          <div className="md:w-full mx-auto ">
            <img
              src={process}
              alt=""
              className="lg:w-[550px] md-w-[275px] h-[450px] object-contain"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:order-1 py-6 text-center md:text-start">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-[#daa520] pb-5">
            The Secure, Easiest And Fastest Money Transfer.
          </h2>
          <p className="leading-6 text-sm md:text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            rerum ipsam nemo, perspiciatis debitis quisquam dolore neque eveniet
            vitae quod iure in magnam quibusdam possimus? Natus repellendus
            suscipit labore dolore? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Eum beatae nemo illo qui velit fuga magnam vel
            nihil sint alias aut harum, ipsam, numquam repellat adipisci
            deserunt maiores animi dolor.
          </p>
          <button className="mt-8 px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full border bg-[rgb(218,165,32)]  text-white font-medium hover:border hover:border-[#daa520] hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
