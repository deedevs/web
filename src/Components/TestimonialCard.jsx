import React from "react";
import logo from "../assets/logo.jpeg";

const TestimonialCard = () => {
  return (
    <div className="lg:px-52 md:px-14 px-5 py-8 relative overflow-hidden bg-slate-300">
      {/* <div className="w-[330px] md:w-[540px] my-16"> */}
      <div className="relative mb-16">
        <div className="bg-white rounded-md shadow py-6 px-5 relative mb-14 leading-6 text-base text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente,
          mollitia optio minima laudantium maiores facilis molestiae voluptas
          iste cum laboriosam officia eos. Maxime, minima! Perferendis tempora
          quis provident a!
        </div>
        <span className="bg-transparent absolute left-5 top-[210px] md:top-[185px] lg:top-[140px] border-t-[25px] border-t-solid border-t-white border-r-[25px] border-r-solid border-r-transparent border-l-[25px] border-l-solid border-l-transparent"></span>
        <div className="relative py-4 pl-8 min-h-[70px] flex justify-between items-center">
          <div className="max-w-[70px] absolute left-0 top-0">
            <img src={logo} alt="" className=" rounded-full" />
          </div>
          <div className="ml-12 absolute top-50">
            <h2>Peter Junior</h2>
            <p className="leading-6 text-base text-gray-500">Developer</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default TestimonialCard;
