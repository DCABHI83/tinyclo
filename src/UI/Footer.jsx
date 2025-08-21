import React from "react";
import footerImg from "../assets/footerImg.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#C3E1F2] gap-2 md:justify-between md:flex-row md:items-start">
        <div className="w-full flex items-center justify-center md:w-[20%]">
          <img
            className="w-[30%] md:w-[100%]"
            src={footerImg}
            alt="footerImage"
          />
        </div>
        <div className="flex justify-between w-[98%] md:w-[70%] md:justify-center md:gap-10  md:mt-10">
          <div className="flex flex-col gap-12 md:gap-[10rem]">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Our Company</h2>
              <NavLink className="cursor-pointer" to="#">
                Blog
              </NavLink>
              <NavLink className="cursor-pointer" to="#">
                About Us
              </NavLink>
            </div>
            <p>© {new Date().getFullYear()} Tinyclo. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:gap-4">
            <h2 className="text-xl font-bold">Products</h2>
            <NavLink className="cursor-pointer" to="#">
              Subscription Plans
            </NavLink>
            <NavLink className="cursor-pointer" to="#">
              Clothing
            </NavLink>
            <NavLink className="cursor-pointer" to="#">
              Equipmemts
            </NavLink>
            <NavLink className="cursor-pointer" to="#">
              Toys
            </NavLink>
            <NavLink className="cursor-pointer" to="/clean-out-closet">
              Clean Out Closet
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
