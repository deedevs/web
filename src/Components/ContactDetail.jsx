import React from "react";

const ContactDetail = ({ className, contact }) => {
  return (
    <li className="py-1">
      <i className={` ${className} py-3 pr-5 md:pr-3 lg:pr-5`}></i>
      <span className="py-3">{contact}</span>
    </li>
  );
};

export default ContactDetail;
