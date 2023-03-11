import React from "react";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
  return (
    <div className={`bg-black lg:px-52 md:px-14 px-5 py-16 rounded-b-[50px]`}>
      <div className="md:flex w-full md:gap-x-24">
        <div className=" md:w-1/2 py-6 text-center md:text-start pt-20">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-[#daa520] pb-5 capitalize">
            RenEx Financial money transfers
          </h2>
          <p className="leading-6 text-lg md:text-2xl text-gray-400">
            Send money to The Gambia Fast and Secured with competitive rate
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
