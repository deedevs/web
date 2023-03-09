import React from "react";
import Card from "./Card";
import Discription from "./Discription";
import logo from "../assets/logo.jpeg";

const Services = () => {
  return (
    <div
      id="Services"
      className="bg-white text-black lg:px-52 md:px-14 px-5 py-16"
    >
      <div className="w-full mx-auto">
        <Discription
          name="Our Services"
          heading="Our ways 0f Transfering Money"
          message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          sequi voluptatem nulla modi nemo explicabo voluptates.
          Voluptatibus, fugit velit, ipsa cumque alias ipsum magnam sed
          voluptas, ea tempora mollitia quia?"
        />
        <div className="md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-10 mt-16 space-y-8 md:space-y-0">
          <Card
            icon="fa-wallet"
            heading="Select Wallet"
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id aspernatur voluptatem, temporibus debitis eaque exercitationem culpa deleniti"
          />
          <Card
            icon="fa-money-bill-transfer"
            heading="Enter Amount"
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id aspernatur voluptatem, temporibus debitis eaque exercitationem culpa deleniti"
          />
          <Card
            icon="fa-hand-pointer"
            heading="Select Receiver"
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id aspernatur voluptatem, temporibus debitis eaque exercitationem culpa deleniti"
          />
          <Card
            icon="fa-square-check"
            heading="Comfirm And Pay"
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id aspernatur voluptatem, temporibus debitis eaque exercitationem culpa deleniti"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
