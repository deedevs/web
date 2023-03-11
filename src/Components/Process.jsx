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
        <div className="md:w-1/2 py-6 text-center md:text-start">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-[#daa520] pb-5">
            Discover how to send money
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-200 pb-3">
            Send Money in 3 easy steps
          </h3>
          <ul className=" text-sm md:text-lg text-gray-400">
            <li className="list-decimal list-inside leading-10 ">
              Log In to your account or create a new one.
            </li>
            <li className="list-decimal list-inside leading-10">
              Let us know who will receive the money.
            </li>
            <li className="list-decimal list-inside leading-10">
              Transfer money from your bank account or bank card.
            </li>
          </ul>
          <button className="mt-8 px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full border bg-[rgb(218,165,32)]  text-white font-medium hover:border hover:border-[#daa520] hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
        <div data-aos="zoom-out-left" className="md:w-1/2  px-14 py-6 my-auto">
          <div className="md:w-full mx-auto ">
            <img
              src={process}
              alt=""
              className="lg:w-[550px] md-w-[350px] h-[450px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
