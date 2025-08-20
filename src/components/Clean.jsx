import React from "react";
import cleanImage from "../assets/cleanImage.png";
import { NavLink } from "react-router-dom";
const Clean = () => {
  return (
    <> 
    <div>

            <div className=" flex flex-col items-center md:items-start p-5">
          <h1 className="text-4xl md:text-5xl">Cleanliness Gurantee</h1>
          <div className="w-[20rem] h-[3.5px] bg-[#EBB5BB] md:w-[26rem]"></div>
        </div>
      <div className="flex items-center justify-center flex-col gap-6 w-[100%] text-center md:flex-row md:w-[100%] md:justify-around">

        <div className="flex flex-col gap-6 md:w-[30%] md:gap-8  ">
            <div className="text-xl">
          <p>
            After each rental, we professionally clean and safely sanitise
            clothes, sealing them with our cleanliness guarantee, ready for the
            next renting family to love.
          </p>
        </div>
        <div className="text-xl">
          <p>
            Clothes that are no longer in rentable condition are either donated
            or recycled. So you can take comfort knowing that we’ll do all we
            can to give clothes a new lease of life, with no clothes ever going
            to landfill
          </p>
        </div>
 <div>
      <NavLink className='bg-[#1A95CF]  text-white text-4xl pr-4 pl-8 pt-2 pb-4 rounded-xl md:text-[1.65rem] md:pt-3 md:rounded shadow-slate-950 shadow-lg hover:scale-110 transition duration-300' to='#'>
            Start Membership
        </NavLink>
 </div>
 
        </div>
        <div className="w-[90%] mt-4 md:w-[40%]">
          <img className=" w-[100%] md:w-[80%]" src={cleanImage} alt="" />
        </div>
      
    </div>
      </div>
    </>
  );
};

export default Clean;
