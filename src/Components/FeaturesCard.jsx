import React from "react";

export const FeaturesCard = ({ icon, heading, message, ...otherProps }) => {
  return (
    <div className="w-full md:max-w-sm text-center rounded-md shadow-md p-6 md:p-3 h-auto hover:scale-[0.9]">
      <i className={`fa-solid ${icon} text-[#daa540] text-6xl md:text-2xl`}></i>
      <h2 className="font-bold text-xl md:text-base text-center text-black py-6">
        {heading}
      </h2>
      <p className=" text-sm text-gray-500">{message}</p>
    </div>
  );
};
