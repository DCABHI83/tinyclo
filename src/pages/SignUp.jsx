import React, { useState } from "react";
import banner from "../assets/banner.png";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const[user,setUser] = useState({
    fullName:"",
    phone:"",
    email:"",
    password:"",
    address:"",
    landmark:"",
    postal:"",
    city:"",
    state:""
  })

const handleInput =(e)=>{
  let name = e.target.name
  let value = e.target.value
  setUser({
    ...user,
    [name] : value
  })
}

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(user)
}

  return (
    <>
      {/* Banner Section */}
      <div
        className="w-full h-[20vh] bg-center bg-cover overflow-hidden flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#197DAB]">Sign Up</h1>
          <div className="w-[5rem] h-[4px] bg-[#FC6565] mx-auto mt-2 rounded-full"></div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full flex justify-center py-10 px-4">
        <form className="w-full max-w-2xl bg-white shadow-lg shadow-slate-500  rounded-xl p-6" onSubmit={handleSubmit}>
          {/* Basic Details */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 text-xl font-bold">Full Name</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                name="fullName"
                value={user.fullName}
                onChange={handleInput}
              />
            </div>
            <div>
              <label className="block text-xl font-bold text-gray-700 ">Phone No.</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                name="phone"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold text-xl">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                name="email"
                value={user.email}
                onChange={handleInput}

              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold text-xl">Create Password</label>
              <input
                type="password"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                name="password"
                value={user.Password}
                onChange={handleInput}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold text-xl">Address</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                name="address"
                value={user.address}
                onChange={handleInput}
              />
            </div>
          </div>

          {/* Address Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block text-gray-700 font-bold text-xl">Landmark</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                name="landmark"
                value={user.landmark}
                onChange={handleInput}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold text-xl">Postal Code</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                name="postal"
                value={user.postal}
                onChange={handleInput}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold text-xl">City</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                name="city"
                value={user.city}
                onChange={handleInput}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold text-xl">State</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#197DAB]"
                name="state"
                value={user.state}
                onChange={handleInput}
               
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              type="submit"
              className="bg-[#197DAB] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#145E82] transition-all"
            >
              Create Account
            </button>
            <NavLink
              to="/login"
              className="text-[#197DAB] font-medium hover:underline"
            >
              Already have an account? Login
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
