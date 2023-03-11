import React from "react";
import { FeaturesCard } from "./FeaturesCard";
const Features = () => {
  return (
    <div
      className="bg-white text-black lg:px-52 md:px-14 px-5 py-24"
      id="Features"
    >
      <div className="md:flex w-full justify-between ">
        <div className="md:w-1/2 py-6 text-center md:text-start md:mr-10 md:mt-32 lg:mt-24 xxl:mt-20">
          <h2
            data-aos="slide-down"
            className="text-2xl md:text-5xl text-[#daa520] pb-5"
          >
            RenEx Loyalty Cash
          </h2>
          <p
            data-aos="slide-right"
            className="leading-6 text-sm md:text-lg text-gray-600"
          >
            Sign up now, make a transfer from your bank account or bank card to
            your RenEx digital wallet and earn up to GBP 50 reward, every time
            you send money from your wallet.
          </p>
          <button
            data-aos="slide-up"
            className="mt-8 px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full border bg-[rgb(218,165,32)]  text-white font-medium hover:border hover:border-[#daa520] hover:bg-white hover:text-black"
          >
            Join Now
          </button>
        </div>
        <div
          data-aos="flip-left"
          className=" md:w-1/2 md:grid md:grid-cols-2 md:grid-rows-2 gap-10 mt-16 space-y-8 md:space-y-0"
        >
          <FeaturesCard
            icon="fa-money-bill-transfer"
            heading="24/7 hours Service"
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              tempore in inventore."
          />
          <FeaturesCard
            icon="fa-money-bill-transfer"
            heading="Fast Transfer"
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              tempore in inventore quis."
          />
          <FeaturesCard
            icon="fa-money-bill-transfer"
            heading="Low Cost"
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              tempore in inventore."
          />
          <FeaturesCard
            icon="fa-money-bill-transfer"
            heading="Trusted Service"
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              tempore in inventore."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
