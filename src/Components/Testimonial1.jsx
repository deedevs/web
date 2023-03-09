import React from "react";
import Discription from "./Discription";
import logo from "../assets/logo.jpeg";

const Testimonial = () => {
  return (
    <div className="bg-white lg:px-52 md:px-14 px-5">
      <Discription
        name="Client Opinion"
        heading="What Users Say About Us"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, tempora ipsum aperiam, quibusdam atque aut voluptatem nostrum architecto inventore temporibus iste harum sint sit beatae accusamus tempore officia unde vel."
      />

      <div className="mt-16 w-full">
        <div className="w-[120px] h-[120px] mx-auto ">
          <img
            src={logo}
            alt=""
            srcset=""
            className="rounded-full border
             border-[#daa540] p-2"
          />
        </div>
        <p className="leading-6 md:text-base text-sm text-gray-500 w-[550px] mx-auto text-center mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
          tempora hic possimus quasi numquam doloribus libero, debitis aut
          dolores autem incidunt.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
