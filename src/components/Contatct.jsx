import React from 'react'
import baby from "../assets/baby.png"
const Contatct = () => {
  return (
<>
<div className='md:text-center md:p-[5rem] '>
  <h1 className='md:text-5xl'>Contact Us</h1>
</div>
<div className='bg-[#F3F7F9] md:flex w-full justify-center items-center md:justify-around'>
    <div className='flex flex-col md:w-[30%]'>
      <form className='flex flex-col gap-5'>
        <div className='flex justify-around items-center md:gap-4 '>
          <div className='flex flex-col '>
            <label className='text-xl' htmlFor="firstName">First name</label>
            <input className='border bg-white md:pr-[6rem] md:pt-4' type="text" name='firstName' />
          </div>
          <div className='flex flex-col  '>
            <label className='text-xl'  htmlFor="lastName">Last name</label>
            <input className='border bg-white md:pr-[6rem] md:pt-4 ' type="text" name='lastname' />
          </div>
        </div>
        <div className='flex justify-around items-center md:gap-4 '>
          <div className='flex flex-col'>
            <label className='text-xl' htmlFor="email"> email</label>
            <input className='border bg-white md:pr-[6rem] md:pt-4' type="email" name='email' />
          </div>
          <div className='flex flex-col'>
            <label className='text-xl' htmlFor="phone">phone</label>
            <input className='border bg-white md:pr-[6rem] md:pt-4' type="text" name='phone' />
          </div>
        </div>
        <div>
          <div className='flex flex-col justify-center w-full'>
            <label className=' text-xl ' htmlFor="message">Message</label>
            <textarea className='w-[90%] md:w-[35vw] h-[20vh] resize-none border mt-0 mb-0 mr-auto ml-auto bg-white' name="message"></textarea>
          </div>
        </div>
          <div className='flex items-center justify-center'>
        <button className='bg-[#FCEBA3] text-[1.5rem] p-4 rounded'>Send Message</button>
      </div>
      </form>
    
      </div>                                      
     <div className='w-full flex items-center justify-center md:w-[50%] '>
      <img className='w-[70%] md:w-[60%]' src={baby} alt="" />
     </div>
</div>

</>
  )
}

export default Contatct
