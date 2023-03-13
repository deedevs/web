import React, { useState } from "react";
import openIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-menu-close.svg";
import Logo from "./Logo";
import NavItems from "./NavItems";

const NavBar = ({ open, setOpen }) => {
  return (
    <div className="py-5 md:px-14 px-5 bg-black text-white shadow-md ">
      <div className="md:flex items-center justify-between relative">
        <Logo />
        <div
          className=" absolute right-5 top-[50px] xl:hidden"
          onClick={() => setOpen(!open)}
        >
          <img
            src={open ? closeIcon : openIcon}
            alt={open ? "close menu icon" : "open menu icon"}
            className="cursor-pointer"
          />
        </div>

        <NavItems
          className={`xl:flex xl:items-center xl:space-x-5 xl:space-y-0 space-y-4 text-xl
         xl:pb-0 pb-5 xl:pt-0 pt-8 absolute xl:static xl:z-10 z-[1] left-0 w-full xl:w-auto xl:pl-0 pl-9 xl:mt-0 bg-black xl:bg-inherit text-white transition-all duration-500 ease-in ${
           open ? "top-[170px] opacity-100 z-30" : "top-[-490px]"
         }`}
        />
      </div>
    </div>
  );
};

export default NavBar;
