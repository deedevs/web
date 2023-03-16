import React from "react";
import { Link } from "react-scroll";

const SocialLink = ({ domain, iconName, iconColor, name }) => {
  return (
    <div className="py-3">
      <Link to={`https://${domain}`}>
        <i
          className={`fa-brands ${iconName} fa-1x lg:fa-2x ${iconColor} mr-4`}
        ></i>
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default SocialLink;
