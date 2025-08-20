import React from "react";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
const MoreCards = () => {
  const arr = [
    {
      src: first,
      text: "Swap Anytime",
      para: "When you're ready to swap, we'll send new looks right away using our pre-paid, reusable shipping kit. It’s that easy!",
    },
    {
      src: second,
      text: "Curate And Ship",
      para: "Pick a plan and share your style preferences. We’ll customize and ship your little’s capsule within 7 business days.",
    },
    {
      src: third,
      text: "Grow In Style",
      para: "Dress your little in their mix-and-match wardrobe as long as you'd like. When you're ready to swap.",
    },
  ];
  return (
    <>

  <div className="flex flex-col justify-center items-center w-full gap-7 md:flex-row md:cursor-pointer md:mt-7 md:gap-7">
 {arr.map((curElem,index)=>{
    return(
        <div className="flex flex-col justify-center items-center w-[78%] p-4 gap-4 rounded-2xl shadow-slate-950 shadow-lg shadow-inset md:w-[25%] transform hover:scale-110 transition duration-300 md:gap-5" key={index}>
            <img className="" src={curElem.src} alt="image" />
            <h2 className="text-2xl font-bold">{curElem.text}</h2>
           <div className="text-center text-xl"> <p>{curElem.para}</p></div>
        </div>
    )
   })}
  </div>
  

    </>
  
  )
};

export default MoreCards;
