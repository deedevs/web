import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div
      className="header bg-no-repeat bg-cover bg-blend-overlay bg-center h-3/4 pb-10 rounded-b-[50px]"
      id="Home"
    >
      <NavBar />
      <Hero />
    </div>
  );
};

export default Header;
