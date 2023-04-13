import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Rates from "./Rates";

const Header = () => {
  return (
    <div className=" h-3/4 rounded-b-[50px]" id="Home">
      <NavBar />
      <Hero />
    </div>
  );
};

export default Header;
