import React from 'react'
import { useState } from 'react'

const Space = () => {
  const [range, setRange] = useState(0)
    const[savedVal,setSavedVal] = useState('Half Wardrobe Saved')
    const handleClick = (value,first) => {
    setRange(value)
    setSavedVal(first)
  }
  return (
    <div className='mt-5 flex flex-col items-center justify-center text-center text-xl gap-4'>
      <div className='md:w-1/2 w-full flex flex-col gap-3'>
 <h1 className='text-3xl text-[#3AB7A6] md:text-4xl'>DID YOU KNOW?</h1>
      <p>
        Babies typically outgrow 6 or more sizes in their first year! Add in 3 different seasons, special occasions, and several outfit changes daily, now that's a LOT of clothes!
      </p>
      </div>
     
      <div className='w-full flex flex-col items-center md:w-[80%]'>
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
          <div onClick={() => handleClick(0,'Half Wardrobe Saved')} className='cursor-pointer'>
            <p>0-3</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(20,'Full Wardrobe Saved')} className='cursor-pointer'>
            <p>3-6</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(40,'Wardrobe And Sofa Saved')} className='cursor-pointer'>
            <p>6-9</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(60,'Half Living Room Saved')} className='cursor-pointer'>
            <p>9-12</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(80,'Full Living Room Saved')} className='cursor-pointer'>
            <p>12-18</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(100,'Guest Room Saved')} className='cursor-pointer'>
            <p>18-24</p>
            <p>months</p>
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center gap-5 md:gap-7'>
        <button className='bg-[#51BFB1] rounded-xl pr-4 pl-4 pt-2 pb-2'>{savedVal}</button>
        
      </div>
    </div>
  )
}

export default Space
