import React from "react";

const Discription = ({ name, heading, message }) => {
  return (
    <div className="w-2/3 mx-auto text-center">
      <h5 className="text-[#daa520] uppercase md:text-xl text-base font-medium">
        {name}
      </h5>
      <h2 className="lg:text-4xl md:text-3xl text-2xl py-5 font-semibold">
        {heading}
      </h2>
      <p className="leading-6 md:text-base text-xs text-gray-400">{message}</p>
    </div>
  );
};

export default Discription;
