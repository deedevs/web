import React from "react";
import heroImg from "../assets/heroImg.png";
import Form from "./Form";

const Hero = () => {
  return (
    <div className=" lg:px-52 md:px-14 px-5 py-8 h-full">
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
        <div className="px-14 md:px-0 py-6 my-auto h-[500px]">
          <div className="md:w-full mx-auto">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
