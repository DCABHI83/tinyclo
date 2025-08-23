import React, { useState } from "react";
import banner from "../assets/banner.png";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <>
      <div>
    
        <div
          className="w-full h-[20vh] bg-center bg-cover overflow-hidden flex justify-center items-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#197DAB]">LogIn</h1>
            <div className="w-[5rem] h-[4px] bg-[#FC6565] mx-auto mt-2"></div>
          </div>
        </div>

   
        <div className="w-full flex justify-center bg-[#FBFBFD] py-8">
          <form
            className="w-[95%] md:w-[40%] flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="font-medium">
                Enter Your Email ID
              </label>
              <input
                type="email"
                name="email"
                className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                value={login.email}
                onChange={handleInput}
                required
              />

              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                value={login.password}
                onChange={handleInput}
                required
              />
            </div>

         
            <div className="flex gap-4 items-center">
              <button
                type="submit"
                className="bg-[#147AA9] rounded text-white text-lg px-4 py-2 hover:bg-[#0f5d7d] transition"
              >
                Login
              </button>
              <NavLink to="/register" className="text-lg text-[#147AA9] hover:underline">
                Create Account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
