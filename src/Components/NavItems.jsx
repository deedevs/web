import React, { useState } from "react";
import { Link } from "react-scroll";

const NavItems = ({ className }) => {
  const navItems = ["Home", "Features", "Services", "Send", "Recieve"];

  return (
    <ul className={className}>
      {navItems.map((item) => (
        <li key={item} className="ml-5 cursor-pointer">
          <Link
            to={item}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-165}
            duration={1000}
            className="hover:text-[#daa520] font-medium"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
