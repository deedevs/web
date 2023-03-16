import React from "react";
import mission from "../assets/mission.jpg";

const Mission = () => {
  return (
    <div
      id="Mission"
      className="missionBg bg-no-repeat bg-cover bg-center lg:px-52 md:px-14 px-5 py-16"
    >
      <div className="p-4 md:flex md:items-center">
        <div className="w-full text-white text-center md:text-start">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-[#daa540] mb-2 text-center md:text-start">
            We Made The Easiest Possible Way To Transfer Money
          </h2>
          <p className="md:text-base text-xs text-gray-400 leading-6">
            We are here to help you move money to your loved ones and put a
            smile on humanity.
          </p>
          <h4 className="text-xl md:text-2xl text-[#daa540] font-bold mt-6">
            Our Mission
          </h4>
          <p className="md:text-base text-xs text-gray-400 leading-6">
            At Renex Financial, we are committed to move your money across
            borders in a fast, secure and convenient way. There is always a
            reason to move your money, perhaps it your child’s education, to
            feed your family or even start a business.
          </p>
          <h4 className="text-xl md:text-2xl text-[#daa540] font-bold mt-6">
            Our Vission
          </h4>
          <p className="md:text-base text-xs text-gray-400 leading-6">
            At RenEx Financial, our vission is to take up social responsibility
            to give back to our local communities in the Gambia.
          </p>
          <h4 className="text-xl md:text-2xl text-[#daa540] font-bold mt-6">
            Our Goal
          </h4>
          <p className="md:text-base text-xs text-gray-400 leading-6">
            Our goal is to commit 2.5% of our quarterly profits towards feeding
            the poorest communities and putting smile to faces.
          </p>
        </div>
        <div
          data-aos="slide-left"
          className="pl-0 md:pl-24 w-full pt-16 md:pt-0"
        >
          <img src={mission} alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
