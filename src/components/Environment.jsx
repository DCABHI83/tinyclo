import React, { useState } from 'react'

const Environment = () => {
    const [range, setRange] = useState(0)
    const[treeVal,setTreeVal] = useState(1)
    const [waterVal,setWaterVal] = useState(200)
    const handleClick = (value,first,second) => {
      setRange(value)
      setTreeVal(first)
      setWaterVal(second)
    }
  return (
   <div className='mt-5 flex flex-col items-center justify-center text-center text-xl gap-4'>
      <div className='md:w-1/2 w-full flex flex-col gap-3'>
 <h1 className='text-3xl text-[#3AB7A6] md:text-4xl'>DID YOU KNOW?</h1>
      <p>
Producing 1 kg of cotton clothes requires 20,000 liters of water and emits 2.6 kg of carbon. Now imagine the environmental toll of clothing and toys for a baby’s entire year—hundreds of thousands of liters of water wasted and significant carbon emissions.      </p>
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
          <div onClick={() => handleClick(0,1,200)} className='cursor-pointer'>
            <p>0-3</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(20,2,300)} className='cursor-pointer'>
            <p>3-6</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(40,3,400)} className='cursor-pointer'>
            <p>6-9</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(60,4,500)} className='cursor-pointer'>
            <p>9-12</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(80,5,600)} className='cursor-pointer'>
            <p>12-18</p>
            <p>months</p>
          </div>
          <div onClick={() => handleClick(100,6,700)} className='cursor-pointer'>
            <p>18-24</p>
            <p>months</p>
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center gap-5 md:gap-7'>
        <button className='bg-[#51BFB1] rounded-xl pr-4 pl-4 pt-2 pb-2'>{treeVal} tree saved + {waterVal} litre water saved </button>
        
      </div>
    </div>
  )
}

export default Environment
