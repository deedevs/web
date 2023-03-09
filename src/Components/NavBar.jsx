import React, { useState } from "react";
import menuIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-menu-close.svg";
import Logo from "./Logo";
import NavItems from "./NavItems";

const NavBar = ({ open, setOpen }) => {
  return (
    <div className="p-5 lg:px-52 md:px-14 px-5 bg-black text-white shadow-md ">
      <div className="md:flex items-center justify-between relative">
        <Logo />
        <div
          className="text-3xl absolute right-8 top-[85px] md:hidden"
          onClick={() => setOpen(!open)}
        >
          <img src={open ? closeIcon : menuIcon} alt="" />
        </div>
        {/* <ul
          className={`md:flex md:items-center md:space-x-5 md:space-y-0 space-y-4 text-lg
        md:pb-0 pb-5 md:pt-0 pt-8 absolute md:static md:z-10 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 md:mt-0 bg-slate-900 md:bg-inherit text-white transition-all duration-500 ease-in ${
          open ? "top-[170px] opacity-100" : "top-[-490px]"
        }`}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-[#daa520] font-medium">
                {item}
              </a>
            </li>
          ))}
        </ul> */}
        <NavItems
          className={`md:flex md:items-center md:space-x-5 md:space-y-0 space-y-4 text-lg
          md:pb-0 pb-5 md:pt-0 pt-8 absolute md:static md:z-10 z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 md:mt-0 bg-black md:bg-inherit text-white transition-all duration-500 ease-in ${
            open ? "top-[170px] opacity-100 z-30" : "top-[-490px]"
          }`}
        />
      </div>
    </div>
  );
};

export default NavBar;
