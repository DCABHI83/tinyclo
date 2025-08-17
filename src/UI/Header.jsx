import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <nav className="flex justify-around items-center p-2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex gap-3 text-2xl text-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#FCEBA3] pr-4 pl-5 rounded-2xl"
                : "border-0"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/rent"
            className={({ isActive }) =>
              isActive
                ? "bg-[#FCEBA3] pr-4 pl-5 rounded-2xl"
                : "border-0"
            }
          >
            Why Rent?
          </NavLink>
          <NavLink
            to="/clean-out-closet"
            className={({ isActive }) =>
              isActive
                ? "bg-[#FCEBA3] pr-4 pl-5 rounded-2xl"
                : "border-0"
            }
          >
            Clean Out Closet
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "bg-[#FCEBA3] pr-4 pl-5 rounded-2xl"
                : "border-0"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive
                ? "bg-[#FCEBA3] pr-4 pl-5 rounded-2xl"
                : "border-0"
            }
          >
            Store
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "bg-[#FCEBA3] pr-4 pl-5 rounded-2xl"
                : "border-0"
            }
          >
            Contact Us
          </NavLink>
        </div>

        <div className="hidden md:flex text-2xl gap-2 text-[#838384] ">
          <div>
            <MdOutlineShoppingCart />
          </div>
          <div>
            <CgProfile />
          </div>
        </div>

        <div className="md:hidden text-5xl text-center">
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Header;
