import React from "react";

const Download = () => {
  return (
    <div className="bg-white lg:px-52 md:px-14 px-5">
      <div className="md:flex w-full">
        <div className="md:w-1/2 py-6 text-center md:text-start">
          <h2 className="text-6xl text-[#daa520] pb-5">
            The Secure, Easiest And Fastest Money Transfer.
          </h2>
          <p className="leading-6 text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            rerum ipsam nemo, perspiciatis debitis quisquam dolore neque eveniet
            vitae quod iure in magnam quibusdam possimus? Natus repellendus.
          </p>
          <button className="mt-8 px-8 py-4 rounded-full border bg-[rgb(218,165,32)]  text-white font-medium hover:border hover:border-[#daa520] hover:bg-white hover:text-black">
            Discover now
          </button>
        </div>
        <div className="md:w-1/2 p-14">
          <div className="md:w-1/2 md:mx-auto ">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
