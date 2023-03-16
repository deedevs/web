import React from "react";

const Discription = ({ name, heading, message, className, color }) => {
  return (
    <div className="w-2/3 mx-auto text-center">
      <h5 className="text-[#daa520] uppercase md:text-xl text-base font-semibold">
        {name}
      </h5>
      <h2
        className={`lg:text-4xl md:text-3xl text-2xl py-5 font-semibold ${color}`}
      >
        {heading}
      </h2>
      <div className="w-16 border-2 border-[#daa540] mx-auto mb-5 "></div>

      <p
        className={`leading-6 md:text-base text-xs text-gray-400 ${className}`}
      >
        {message}
      </p>
    </div>
  );
};

export default Discription;
