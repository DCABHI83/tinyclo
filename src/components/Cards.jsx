import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { NavLink } from "react-router-dom";
const Cards = () => {
  return (
    <>
      <div className="w-full mt-1 flex flex-col gap-2 md:flex-row p-3 ">
        <div className="bg-[#E0ECF6] flex items-center justify-around rounded-2xl md:h-fit md:w-[40vw]">
          <div>
            <img src={image1} className="w-[25vw] md:w-[10vw]" alt="image" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl">Kids Clothing</h2>
            <p className="text-2xl">Age (0-12)</p>
            <NavLink to="#" className="bg-[#FCEBA3] pl-7 text-2xl rounded-[6px]">
              Explore
            </NavLink>
          </div>
        </div>
        <div className="bg-[#E9B3BA] flex items-center justify-around rounded-2xl md:h-fit md:w-[40vw]">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl">Equipments</h2>
            <p className="text-2xl">Age (0-12)</p>
            <NavLink to="#" className="bg-[#FCEBA3]  pl-6 text-2xl rounded-[6px]">
              Explore
            </NavLink>
          </div>
          <div>
            <img src={image2} className="w-[40vw] md:w-[14.5vw]" alt="image" />
          </div>
        </div>
        <div className="bg-[#BCDFD2] flex items-center justify-around rounded-2xl md:h-fit md:w-[40vw]">
          <div>
            <img src={image3} className="w-[40vw] md:w-[13vw]" alt="image" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl">Toys</h2>
            <p className="text-2xl">Age (0-12)</p>
            <NavLink to="#" className="bg-[#FCEBA3] pl-4 pr-4 text-2xl rounded-[6px]">
              Explore
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
