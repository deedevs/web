import React from "react";
// import logo from "../assets/logo.png";
import logo from "../assets/logo3.png";

const Logo = () => {
  return (
    // lg:w-[300px] w-[200px] md:h-[125px] h-[120px]
    <div className="lg:w-[250px] w-[200px] md:h-[150px] h-[125px]">
      <img src={logo} alt="logo" srcSet="" className="w-full h-full" />
    </div>
  );
};

export default Logo;
