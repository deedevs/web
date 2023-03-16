import React from "react";

const TeamCard = ({ image, name, role, bio }) => {
  return (
    <div className="group h-[500px] w-[90%] md:w-full [perspective:1000px] shadow-lg">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000  group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={image}
            alt="avater"
            className="h-[80%] xl:h-3/4 w-full rounded-xl object-center"
          />
          <div className="p-6">
            <h3 className="text-xl font-medium capitalize text-gray-700">
              {name}
            </h3>
            <p className="capitalize text-gray-600">{role}</p>
          </div>
        </div>
        <div
          className="absolute inset-0 h-full w-full rounded-xl bg-white text-center text-gray-600 [transform:rotateY(180deg)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-start text-base font-medium p-6 w-full h-full overflow-hidden">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
