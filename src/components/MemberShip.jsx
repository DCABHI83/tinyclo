import React from 'react'
import { NavLink } from 'react-router-dom'
import membership1 from '../assets/membership1.png'
import membership2 from '../assets/membership2.png'
const MemberShip = () => {
  return (
   <>
   <div>
     <div className='mt-7 p-4' >
    <h1 className="text-4xl md:text-5xl">Membership Plans</h1>
      <div className="w-[17rem] h-[3.5px] bg-[#EBB5BB] md:w-[22.5rem]"></div>
   </div>
   <div className='p-4 flex flex-col md:flex-row items-center md:justify-around gap-5'>
    <div className='relative shadow-slate-950 shadow-lg shadow-inset rounded-xl p-2 md:w-[39%] transform hover:scale-110 transition duration-300'>
    <div className='absolute top-5'>
        <img className='w-[58%] md:w-[75%]' src={membership1} alt="image" />
    </div>
    <div className='flex flex-col w-full text-end items-end text-[1.35rem] md:w-[100%] gap-4'>
        <h2 className='bg-amber-950 text-white p-2 rounded'>TinyClo PREMIUM PLAN</h2>
        <p className='text-xl w-1/2'>Apparels from top-tier sustainable brands, chosen by our experts</p>
        <h3 className='text-[#0C8877]'>from from ₹49.00</h3>
    </div>
    <div className='flex pt-4 pb-10 justify-end bg-[#F9EEF0] pr-2 md:w-[100%]'>
        <button className='bg-[#1A95CF] text-2xl text-white p-2 rounded'>Choose Membership</button>
    </div>
   </div>
    <div className='relative shadow-slate-950 shadow-lg shadow-inset rounded-xl p-2 md:w-[39%] transform hover:scale-110 transition duration-300'>
    <div className='absolute top-8'>
        <img className='w-[60%] md:w-[75%]' src={membership2} alt="image" />
    </div>
    <div className='flex flex-col w-full text-end items-end text-[1.35rem] md:w-[100%] gap-4'>
        <h2 className='bg-[#FC6565] text-white p-2 rounded'>TinyClo PREMIUM PLAN</h2>
        <p className='text-xl w-1/2'>Apparels from top-tier sustainable brands, chosen by our experts</p>
        <h3 className='text-[#0C8877]'>from from ₹49.00</h3>
    </div>
    <div className='flex pt-4 pb-10 justify-end bg-[#F9EEF0] pr-2 md:w-[100%]'>
        <button className='bg-[#1A95CF] text-2xl text-white p-2 rounded'>Choose Membership</button>
    </div>
   </div>

   </div>
   
   </div>
  
   </>
  )
}

export default MemberShip
