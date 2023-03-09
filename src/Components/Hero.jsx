import React from "react";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
  return (
    <div className={`bg-black lg:px-52 md:px-14 px-5 py-16 rounded-b-[50px]`}>
      <div className="md:flex w-full md:gap-x-24">
        <div className=" md:w-1/2 py-6 text-center md:text-start">
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
            Discover now
          </button>
        </div>
        <div className="md:w-1/2 px-14 py-6 my-auto">
          <div className="md:w-full mx-auto">
            <img
              src={heroImg}
              alt=""
              className="lg:w-[550px] md-w-[275px] h-[450px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
