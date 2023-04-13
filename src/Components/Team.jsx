import React from "react";
import Discription from "./Discription";
import ceoImg from "../assets/ceo.jpg";
import directorImg from "../assets/director.jpg";
import mdImg from "../assets/md.png";

import logo from "../assets/logo.png";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div
      id="Our Team"
      className="team bg-no-repeat bg-cover bg-center lg:px:32 xl:px-52 md:px-14 px-5 py-16 w-full h-full "
    >
      <div className="w-full">
        <Discription
          name="Our Team"
          heading="Meet out Leaders"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
          className="text-gray-600"
        />
        <div className="mt-16 w-full flex flex-col justify-center items-center gap-10 md:grid md:grid-cols-2 md:grid-rows-2 xl:flex xl:justify-between xl:flex-row">
          <TeamCard
            image={ceoImg}
            name="Mr Rene Anthony Blain"
            role="CEO"
            bio="Mr Blain is a seasoned financial guru with nearly 20 years experience in the financial sector. At a tender age he was head of GTBank Treasury FX markets. 

            He later was appointed as the Country treasurer of Ecobank Gambia Limited to manage money markets and foreign exchange transactions as well as the balance sheet of the bank. It was his key decision making, analytical skills and strive for excellency that made him an important player within the banking sector. His drive to serve the community and deliver a better service convinced Mr Blain to team up with investors to set up his first Financial Service company M A Financial as the Managing Director. He later went on to form MZM Financial."
          />
          <TeamCard
            image={directorImg}
            name="Ebrima S Bah"
            role="Director"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidaorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
          />
          <TeamCard
            image={mdImg}
            name="Khadijatou Bah"
            role="Managing Director"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidaorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
          />
          <TeamCard
            image={logo}
            name="Peter Junior Mendy"
            role="Dev"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidaorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
