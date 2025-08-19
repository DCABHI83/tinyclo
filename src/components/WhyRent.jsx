import React, { useState } from 'react'
import Cost from './Cost'
import Environment from './Environment'
import Space from './Space'

const WhyRent = () => {
    const [isActive,setisActive] = useState('cost')
     
  return (
  <>
  <div className='mt-7 p-5'>
      <h1 className="text-4xl md:text-5xl">Why Rent ?</h1>
      <div className="w-[10rem] h-[3.5px] bg-[#EBB5BB] md:w-[14rem]"></div>
     <div className=" mt-7 md:p-[4rem] flex flex-col items-center">
      
      <div className='flex  justify-between  w-[80%] md:w-[45%]'>
        <button className={isActive === 'cost' ?  'bg-[#FCEBA3] text-[1.25rem] rounded-[10px] pr-1 pl-2  cursor-pointer md:text-2xl md:pr-2 md:pl-4': " text-[1.25rem] pr-1 pl-2  cursor-pointer md:text-2xl md:pr-2 md:pl-4"} onClick={()=>setisActive('cost')}>Cost Savings</button>
        <button className={isActive  === 'Environment' ? 'bg-[#FCEBA3] text-[1.25rem] pr-1 pl-2 rounded-[10px] cursor-pointer md:text-2xl md:pr-2 md:pl-4': "text-[1.25rem] pr-1 pl-2  cursor-pointer md:text-2xl md:pr-2 md:pl-4 rounded-[10px] "} onClick={()=>setisActive("Environment")} >Environment Savings</button>
        <button className={isActive === "space" ? 'bg-[#FCEBA3] text-[1.25rem] p-[0.5em] pr-1 pl-2  cursor-pointer rounded-[10px] md:text-2xl md:pr-2 md:pl-4 ': " text-[1.25rem] p-[0.5em] pr-1 pl-2  rounded-[10px] cursor-pointer md:text-2xl md:pr-2 md:pl-4"} onClick={()=>setisActive("space")}>Space Savings</button>
      </div>
      </div>

<div className='w-full flex justify-center items-center'>
    {isActive === "cost" ? <Cost/> : null}
    {isActive === "Environment" ? <Environment/> : null}
    {isActive === "space" ? <Space/> : null}
    
</div>


  </div>
  
  </>
  )
}

export default WhyRent
