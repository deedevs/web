import React from "react";
import Discription from "./Discription";
import TeamCard from "./TeamCard";
import logo from "../assets/logo.jpeg";

const Team = () => {
  return (
    <div id="Our Team" className="bg-white lg:px-52 md:px-14 px-5 py-16">
      <div className="w-full">
        <Discription
          name="Our Team"
          heading="Meet out Leaders"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        />
        <div className="md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-10 mt-16 space-y-8 md:space-y-0 w-full">
          <TeamCard
            name="Peter Junior Mendy"
            role="Junior Developer"
            image={logo}
          />
          <TeamCard
            name="Peter Junior Mendy"
            role="Junior Developer"
            image={logo}
          />
          <TeamCard
            name="Peter Junior Mendy"
            role="Junior Developer"
            image={logo}
          />
          <TeamCard
            name="Peter Junior Mendy"
            role="Junior Developer"
            image={logo}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
