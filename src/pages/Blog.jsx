import React from "react";
import banner from "../assets/banner.png";
import { NavLink } from "react-router-dom";
import blog from '../Api/blog.json'
import blogImage from '../assets/blogImage.png'

const Blog = () => {
  return (
    <>
      <div>
 
        <div
          className="w-full h-[20vh] bg-center bg-cover overflow-hidden flex justify-center items-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div>
            <h1 className="text-4xl text-[#197DAB]">Blogs</h1>
            <div className="w-[5rem] h-[4px] bg-[#FC6565]"></div>
          </div>
        </div>

        <div className="flex items-end justify-end p-4">
          <NavLink
            to="/login"
            className="bg-[#197DAB] text-white rounded text-2xl p-2"
          >
            Login to Create Blogs
          </NavLink>
        </div>

     
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  {blog.map((curElem, index) => {
    return (
      <div
        key={index}
        className=" flex flex-col bg-white rounded shadow-md overflow-hidden h-[25rem] "
      >

        <div className="w-full h-[12rem]">
          <img
            src={blogImage}
            className="w-full h-full object-cover"
            alt="blogImage"
          />
        </div>

        <div className="flex flex-col gap-5 p-4 flex-1">
          <h2 className="text-xl font-semibold line-clamp-1">{curElem.title}</h2>
          <p className="text-sm text-gray-600 line-clamp-3">{curElem.description}</p>
          <p className="text-xs text-gray-500">{curElem.date}</p>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </>
  );
};

export default Blog;
