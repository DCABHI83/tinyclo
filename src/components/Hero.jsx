import React from "react";
import tiny from "../assets/tiny.png";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col mt-4 md:flex-row items-center w-full justify-around gap-7">
        <div className="flex flex-col gap-5 text-center ">
          <h2 className="text-5xl flex gap-2 p-1.5 md:text-7xl">
            <span className="text-[#FC6565]">BABIES</span>GROW FAST
          </h2>
          <h3 className="text-4xl font-medium">Simplify Your Life with Our</h3>
          <div>
            <button className="bg-[#FC6565] text-3xl rounded p-2">
              TInyClo Subscription
            </button>
          </div>
          <div className="mt-2 flex items-center justify-center gap-4">
            <button className=" bg-[#FCEBA3] text-2xl rounded pr-2 pl-4 pt-2 pb-2">How it works?</button>
            <button className="pr-2 pl-4 pt-2 pb-2 text-white text-2xl rounded bg-[#147AA9]">
              Start Membership
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%]">
          <img src={tiny} className="w-[100%] h-auto" alt="tiny" />
        </div>
      </div>
    </>
  );
};

export default Hero;
