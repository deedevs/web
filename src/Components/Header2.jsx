import React from "react";
import logo from "../assets/logo.jpeg";
import NavItems from "./NavItems";

const Header2 = () => {
  return (
    <header className="w-full min-h-min text-white bg-black bg-blend-overlay bg-cover bg-center relative mb-8">
      <div className="py-8 px-10 flex justify-between items-center w-full fixed top-0 left-0 right-0 z-[2]">
        <div className="flex justify-center items-center">
          <img src={logo} alt="" />
        </div>
        <nav>
          <NavItems className="flex items-center bg-slate-400" />
        </nav>
      </div>
    </header>
  );
};

export default Header2;
