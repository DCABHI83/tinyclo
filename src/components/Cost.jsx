import React, { useState } from 'react'

const Cost = () => {
  const [range, setRange] = useState(0)
  const[spentVal,setSpentVal] = useState(12)
  const [tinyVal,setTinyVal] = useState(4)
  const handleClick = (value,first,second) => {
    setRange(value)
    setSpentVal(first)
    setTinyVal(second)
  }
  
  return (
    <div className='mt-5 flex flex-col items-center justify-center text-center text-xl gap-4'>
      <div className='md:w-1/2 w-full flex flex-col gap-3'>
 <h1 className='text-3xl text-[#3AB7A6] md:text-4xl'>DID YOU KNOW?</h1>
      <p>
        Babies typically outgrow 6 or more sizes in their first year! Add in 3 different seasons, special occasions, and several outfit changes daily, now that's a LOT of clothes!
      </p>
      </div>
     
      <div className='w-full  flex flex-col items-center md:w-[80%]'>
        <input 
          type="range" 
          className='w-[95%]' 
          min={0} 
          max={100} 
          step={20} 
          value={range} 
          onChange={(e) => setRange(Number(e.target.value))}
        />
        <div className='flex items-center justify-center gap-1 mt-3 md:gap-[8rem]'>
          <div onClick={() => handleClick(0,12,4)} className='cursor-pointer'>
            <p>0-3</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(20,24,8)} className='cursor-pointer'>
            <p>3-6</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(40,36,12)} className='cursor-pointer'>
            <p>6-9</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(60,48,16)} className='cursor-pointer'>
            <p>9-12</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(80,60,20)} className='cursor-pointer'>
            <p>12-18</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(100,72,24)} className='cursor-pointer'>
            <p>18-24</p>
            <p>months</p>
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center gap-5 md:gap-7'>
        <button className='bg-[#51BFB1] rounded-xl pr-4 pl-4 pt-2 pb-2'>Average Spent: ₹{spentVal}K</button>
        <button className='bg-[#E9817F] rounded-xl pr-4 pl-4 pt-2 pb-2'>TinyClo: ₹{tinyVal}K</button>
      </div>
    </div>
  )
}

export default Cost
     