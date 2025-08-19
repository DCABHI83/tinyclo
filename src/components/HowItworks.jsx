import React from "react";
import video from "../assets/video.mp4";
import tinyClo from "../assets/tinyClo.png";
import swap from "../assets/swap.png";
import returnImage from "../assets/returnImage.png";
import { NavLink } from "react-router-dom";
const HowItworks = () => {
  return (
    <>
      <div className="md:p-[4rem]">
        <h1 className="text-4xl md:text-5xl">How it Works?</h1>
      <div className="w-[13rem] h-[3.5px] bg-[#EBB5BB] md:w-[17.5rem]"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center md:p-[5rem]">
          <video
            src={video}
            autoPlay="on"
            className="mt-4 rounded-2xl w-[90%]"
          ></video>
        </div>
        <div className="p-4 flex flex-col md:flex-row justify-evenly items-center md:w-[95%]">
         <div className="flex flex-col justify-center items-center shadow-slate-950 shadow-lg shadow-inset text-center mt-4 gap-4 rounded-2xl p-3 md:w-[25vw] md:h-[50vh]">
  <div>
    <img src={tinyClo} alt="image" />
  </div>
  <h3 className="text-2xl">RENT</h3>
  <p className="text-2xl">
    Pick one of our plans. Choose from our curated everyday
    essentials, or handpick outfits from our premium brands.
  </p>
</div>
         <div className="flex flex-col justify-center items-center shadow-slate-950 shadow-lg shadow-inset text-center mt-4 gap-4 rounded-2xl p-3 md:w-[25vw] md:h-[50vh]">
  <div>
    <img src={returnImage} alt="image" />
  </div>
  <h3 className="text-2xl">RENT</h3>
  <p className="text-2xl">
   When your little one outgrows their clothes, simply pop them back to us in the reusable bag. For FREE, of course
  </p>
</div>
         <div className="flex flex-col justify-center items-center shadow-slate-950 shadow-lg shadow-inset text-center mt-4 gap-4 rounded-2xl p-3 md:w-[25vw] md:h-[50vh]">
  <div>
    <img src={swap} alt="image" />
  </div>
  <h3 className="text-2xl">RENT</h3>
  <p className="text-2xl">
   Easily pick your next bundle of clothes in your account. They will arrive super quickly, and always with our Cleanliness Guarantee!
  </p>
</div>

         
          
        </div>
        <div>
       <NavLink to="#"><button className="bg-[#147AA9] text-4xl pr-4 pl-8 pt-2 pb-4 rounded-[7px] mt-7 text-white cursor-pointer">Start Membership</button></NavLink>   
        </div>
      </div>
    </>
  );
};

export default HowItworks;
