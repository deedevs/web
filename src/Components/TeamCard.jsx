import React from "react";

const TeamCard = ({ name, role, image }) => {
  return (
    <div className=" shadow-lg shadow-slate-300 overflow-hidden rounded-md h-fit">
      <div className="h-2/3">
        <img
          src={image}
          alt={`${name}, ${role}/'s image.`}
          className="w-full h-full"
        />
      </div>
      <div className="px-4 py-3 bg-white ">
        <h3 className="text-lg capitalize font-medium text-gray-800">{name}</h3>
        <h4 className="text-base capitalize text-gray-700 mb-2 ">{role}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing amet elit.
          <span className="text-blue-500 ml-2 cursor-pointer">Read more</span>
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
