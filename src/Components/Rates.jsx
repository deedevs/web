import React from "react";
import "../App.css";

const Rates = () => {
  const rates = ["USD: $47", "GP: £60", "EURO: €50"];

  const ratesList = rates.map((rate) => <li key={rate}>{rate}</li>);
  return (
    <div className="max-w-[100%] lg:mt-4 rounded-md w-full">
      <div className=" block absolute font-italic md:text-[35px] bg-[#daa520] text-white uppercase py-[15px] px-[15px] italic z-[1] rounded-md rounded-r-lg">
        Rates
      </div>
      <div className="text-up h-[50px] md:h-[78px] bg-bgColor  shadow-inner overflow-hidden relative text-white uppercase text-[25px] font-semibold flex items-center left-[12px]">
        <ul className="flex rate-text justify-between w-full">{ratesList}</ul>
      </div>
    </div>
  );
};

export default Rates;
