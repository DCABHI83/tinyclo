import React from "react";
import closetImg from "../assets/closetImg.png";
import parentPhone from "../assets/parentPhone.png";
import process from '../assets/process.png'
const Closet = () => {
  return (
    <>
      <div>
        <div className="flex flex-col p-4 gap-2">
          <div className="flex flex-col p-3 gap-3">
            <div>
              <h1 className="text-2xl font-bold">
                Clean Out Your Child Closet
              </h1>
              <p className="font-bold">
                send us your child's outgrown garments at no cost to you--and
                earn rewards too
              </p>
            </div>
            <div>
              <button className="border bg-[#147AA9] text-white px-2 py-2 rounded">
                Get Your kit
              </button>
            </div>
          </div>

          <div className="w-full">
            <img className="w-[90%] p-2" src={closetImg} alt="img" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-5 gap-2">
          <h1 className="text-xl font-[500]">
            Offload Outgrown Items Sustainably
          </h1>
          <p className="px-7 font-[500]">
            Baby clothes belong on babies, not in storage bins—or, (gasp!)
            landfill. When you donate them to us, you can be certain they'll
            stay in circulation or retired in a responsible way.
          </p>
        </div>

        <div>
          <div className="w-full p-3">
            <img src={parentPhone} alt="image" />
          </div>
          <div className="text-center p-2">
            <h1 className="text-2xl">
              <span className="text-[#408BB1]">Refresh Their Closet</span>{" "}
              <span className="text-[#FC9F99]">in 3 Simple Steps</span>
            </h1>
          </div>
        </div>

        <div className="">
          <img src={process} alt="" />
        </div>
      </div>
    </>
  );
};

export default Closet;
