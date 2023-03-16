import React from "react";

const TestimonialCard2 = ({ image, name, role, comment }) => {
  return (
    <div className="mt-16 max-w-xl p-8 shadow-md shadow-gray-400">
      <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] mx-auto ">
        <img
          src={image}
          alt=""
          srcSet=""
          className="rounded-full border
             border-[#daa540] p-2"
        />
      </div>
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#daa540] text-center mt-2">
        {name}
      </h3>
      <span className="text-sm md:text-base lg:text-lg font-medium text-blacktext-center">
        {role}
      </span>
      <p className="leading-6 md:text-base text-sm text-gray-500 mx-auto text-center mt-6">
        {comment}
      </p>
    </div>
  );
};

export default TestimonialCard2;
