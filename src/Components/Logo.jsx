import React from "react";
import logo from "../assets/logo.jpeg";

const Logo = () => {
  return (
    <div className="md:w-[300px] md:h-[150px] w-[150px] h-[150px]">
      <img src={logo} alt="logo" srcSet="" className="w-full h-full" />
    </div>
  );
};

export default Logo;
