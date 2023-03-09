import React from "react";
import { Link } from "react-scroll";

const FooterLink = ({ section }) => {
  return (
    <Link
      to={section}
      spy={true}
      smooth={true}
      offset={50}
      duration={1000}
      className="py-1 block text-lg text-white hover:text-[#daa540]"
    >
      {section}
    </Link>
  );
};

export default FooterLink;
