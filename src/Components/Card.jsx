import React from "react";
import logo from "../assets/logo.jpeg";

const Card = ({ icon, heading, message }) => {
  return (
    <div className=" rounded-md bg-slate-50 p-8 shadow-md shadow-white overflow-hidden md:hover:scale-[1.05] hover:scale-[1.02]">
      <div className="w-full text-center">
        <i className={`fa-solid ${icon} fa-6x text-[#daa540]`}></i>
      </div>
      <a href="#">
        <h3 className="text-center text-[#daa520] text-xl xl:text-lg tracking-wide font-semibold mt-5">
          {heading}
        </h3>
        <div className="w-16 border-2 border-black mx-auto mb-5 "></div>
        <p className="leading-6 text-center text-base text-gray-500">
          {message}
        </p>
      </a>
    </div>
  );
};

export default Card;
