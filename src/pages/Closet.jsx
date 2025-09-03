import React from "react";
import closetImg from "../assets/closetImg.png";
import parentPhone from "../assets/parentPhone.png";
import process from "../assets/process.png";

const Closet = () => {
  return (
    <>
      <div>
      
        <div className="flex flex-col p-4 gap-2 md:flex-row md:items-center">
          <div className="flex flex-col p-3 gap-3 md:w-1/2">
            <div className="flex flex-col md:gap-7">
              <h1 className="text-2xl font-bold md:text-3xl">
                Clean Out Your Child Closet
              </h1>
              <p className="font-bold md:text-3xl">
                send us your child's outgrown garments at no cost to you--and
                earn rewards too
              </p>
              <div>
                <button className="border bg-[#147AA9] text-white px-4 py-2 rounded-lg md:text-2xl hover:bg-[#0f5c81] transition">
                  Get Your Kit
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <img className="w-[90%] p-2" src={closetImg} alt="img" />
          </div>
        </div>

       
        <div className="flex flex-col justify-center items-center p-5 gap-2">
          <h1 className="text-xl font-semibold md:text-3xl">
            Offload Outgrown Items Sustainably
          </h1>
          <p className="px-7 font-medium md:text-2xl md:w-[80vw] text-center">
            Baby clothes belong on babies, not in storage bins—or, (gasp!)
            landfill. When you donate them to us, you can be certain they'll
            stay in circulation or retired in a responsible way.
          </p>
        </div>

        <div>
          <div className="w-full p-3 md:flex md:justify-center">
            <img src={parentPhone} alt="image" className="max-w-sm md:max-w-md" />
          </div>
          <div className="text-center p-2 md:p-7">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-[#408BB1]">Refresh Their Closet</span>{" "}
              <span className="text-[#FC9F99]">in 3 Simple Steps</span>
            </h1>
          </div>
        </div>

        
        <div className="w-full">
          <img src={process} alt="process" className="w-full" />
        </div>

        
        <div className="w-full bg-[#F1BAC0] flex flex-col items-center text-center py-8 px-4 gap-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            GROW WITH US
          </h1>
          <p className="text-sm md:text-lg text-gray-800 max-w-2xl">
            Sign up to get subscriber-only deals, first access to new products,
            insightful parenting content and more.
          </p>
          <div className="flex gap-2 w-full max-w-md">
            <input
              type="email"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#147AA9]"
              placeholder="email@example.com"
            />
            <button className="px-6 py-2 bg-[#147AA9] text-white font-medium rounded-r-md hover:bg-[#0f5c81] transition">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Closet;
