import React from "react";
import logo from "../assets/logo.jpg";

const Logo = () => {
  return (
    <div className="lg:w-[300px] w-[200px] md:h-[125px] h-[120px]">
      <img src={logo} alt="logo" srcSet="" className="w-full h-full" />
    </div>
  );
};

export default Logo;
