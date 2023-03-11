import React from "react";

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="min-w-[225px] min-h-[425px] max-w-full w-full shadow-lg shadow-slate-300 hover:top-1">
      <div className="h-2/3">
        <img
          src={image}
          alt={`${name}, ${role}/'s image.`}
          className="w-full h-full"
        />
      </div>
      <div className="px-4 py-3 bg-white ">
        <h3 className="text-lg capitalize font-medium text-gray-900">{name}</h3>
        <h4 className="text-base capitalize text-gray-700">{role}</h4>
      </div>
    </div>
  );
};

export default TeamCard;
