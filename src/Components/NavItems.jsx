import React, { useState } from "react";
import { Link } from "react-scroll";

const NavItems = ({ className }) => {
  const navItems = [
    "Home",
    "Features",
    "Process",
    "Services",
    "Mission",
    "Our Team",
    "Partners",
    "Testimonial",
  ];
  // const [clicked, setClicked] = useState(false);

  return (
    <ul className={className}>
      {navItems.map((item) => (
        <li key={item} className="ml-5 cursor-pointer">
          <Link
            to={item}
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className="hover:text-[#daa520] font-medium"
            // onClick={() => setClicked(true)}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
