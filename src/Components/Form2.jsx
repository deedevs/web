import React, { useState } from "react";
// import usa from "../assets/usa.png";
import uk from "../assets/uk.png";

const Form = () => {
  const [form, setForm] = useState("send");

  return (
    <div className=" w-full h-auto border rounded shadow-xl">
      <div className="flex items-center justify-between lg:mb-0 h-[80px] py-10 px-6">
        <button
          className={`text-lg cursor-pointer uppercase h-[50px] w-28 lg:w-1/4 rounded  border bg-[rgb(218,165,32)]  text-white font-medium hover:border hover:border-[#daa520] hover:bg-white hover:text-black ${
            form == "send" ? "bg-blue-500" : ""
          }`}
          onClick={() => setForm("send")}
        >
          send
        </button>
        <button
          className={`text-lg cursor-pointer uppercase h-[50px] w-28 lg:w-1/4 rounded  border bg-[rgb(218,165,32)]  text-white font-medium hover:border hover:border-[#daa520] hover:bg-white hover:text-black ${
            form == "send" ? "" : "bg-blue-500"
          }`}
          onClick={() => setForm("receive")}
        >
          Receive
        </button>
      </div>
      <div className="w-full ">
        {form === "send" ? (
          <form action="#">
            <div className="py-8 px-5">
              <label htmlFor="sendAmount" className="uppercase text-sm mt-2">
                SEND
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="£ 1000"
                  className="py-4 px-2 border border-gray-400 text-white bg-transparent outline-0 text-2xl w-[90%] lg:w-4/5 placeholder:text-base lg:placeholder:text-lg placeholder:text-slate-300 mr-4"
                />
                <img
                  src={uk}
                  alt=""
                  className="w-16 md:w-20 lg:w-24 xl:w-28 h-full"
                />
              </div>
            </div>
            <div className="py-8 px-5">
              <label htmlFor="sendAmount" className="uppercase text-sm mt-2">
                receiver country
              </label>
              <input
                type="text"
                // placeholder="Receiver Country"
                value="Gambia"
                className="py-4 px-2 border border-gray-400 text-white bg-transparent outline-0 text-2xl w-full placeholder:text-base lg:placeholder:text-lg placeholder:text-slate-300"
              />
            </div>
            <div className="w-full flex justify-end pr-4">
              <button className="px-5 py-2 md:px-6 md:py-3 mb-4  lg:px-8 lg:py-4 rounded-full border bg-[rgb(218,165,32)]  text-white font-medium hover:border hover:border-[#daa520] hover:bg-white hover:text-black">
                Estimate Fees
              </button>
            </div>
          </form>
        ) : (
          <form action="#">
            <div className="py-8 px-5">
              <label htmlFor="sendAmount" className="uppercase text-sm mt-2">
                Receive
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Send Amount"
                  className="py-4 px-2 border border-gray-400 text-white bg-transparent outline-0 text-2xl w-full placeholder:text-base lg:placeholder:text-lg placeholder:text-slate-300"
                />
              </div>
            </div>
            <div className="py-8 px-5">
              <label htmlFor="sendAmount" className="uppercase text-sm mt-2">
                receiver country
              </label>
              <input
                type="text"
                // placeholder="Receiver Country"
                value="Gambia"
                className="py-4 px-2 border border-gray-400 text-white bg-transparent outline-0 text-2xl w-full placeholder:text-base lg:placeholder:text-lg placeholder:text-slate-300"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
