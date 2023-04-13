import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  // const [bgState, setBgState] = useState("black");

  const nav = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= nav.current.offsetHeight) {
        nav.current.classList.add(
          "bg-white",
          "fixed",
          "text-black",
          "w-full",
          "z-[100]"
        );
        // setBgState("white");
      } else {
        nav.current.classList.remove(
          "bg-white",
          "fixed",
          "text-black",
          "w-full",
          "z-[100]"
        );
        // setBgState("black");
      }
    });
  }, []);

  return (
    <nav
      ref={nav}
      className=" md:pr-14 pr-5 bg-white text-black shadow-md block"
    >
      <div className="md:flex items-center justify-between">
        <Logo />
        <div
          className=" absolute right-6 top-[65px] xl:hidden"
          onClick={() => setOpen(!open)}
        >
          {/* ${bgState == "white" ? "text-black" : "text-white"} */}
          <i
            className={`fa-solid fa-2x xl:fa-3x cursor-pointer ${
              open ? "fa-xmark" : "fa-bars"
            } `}
          ></i>
        </div>
        {/* ${
            bgState === "white" ? "bg-white text-black" : "bg-black text-white"
          } */}
        <NavItems
          className={`xl:flex xl:items-center xl:space-x-5 xl:space-y-0 space-y-4 text-xl
         xl:pb-0 pb-5 xl:pt-0 pt-8 absolute xl:static xl:z-10 z-[1] left-0 w-full xl:w-auto xl:pl-0 pl-9 xl:mt-0 xl:bg-inherit  transition-all duration-500 ease-in bg-white text-black ${
           open ? "top-[160px] opacity-100 z-[1]" : "top-[-490px]"
         } `}
        />
      </div>
    </nav>
  );
};

export default NavBar;
