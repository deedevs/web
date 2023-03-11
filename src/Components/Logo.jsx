import React from "react";
import logo from "../assets/logo.jpeg";

const Logo = () => {
  return (
    <div className="max-w-[300px] md:w-[200px] lg:w-[250px] w-[200px] md:h-[125px] h-[120px]">
      <img src={logo} alt="logo" srcSet="" className="w-full h-full" />
    </div>
  );
};

export default Logo;
