import React, { useState } from 'react'
import baby from "../assets/baby.png"
const Contatct = () => {
  const[user,setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    message:""
  })

  const handleInput = (e)=>{
    let name = e.target.name
    let value = e.target.value
    setUser({
      ...user,
      [name]:value
    })
  }


  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user)
  }
  return (
<>
<div className='md:text-center md:p-[5rem] '>
  <h1 className='md:text-5xl'>Contact Us</h1>
</div>
<div className='bg-[#F3F7F9] md:flex w-full justify-center items-center md:justify-around md:pb-[10rem]'>
    <div className='flex flex-col md:w-[30%]'>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <div className='flex justify-around items-center md:gap-4 '>
          <div className='flex flex-col '>
            <label className='text-xl' htmlFor="firstName">First name</label>
            <input className='border bg-white md:pr-[6rem] md:pt-4 ' value={user.firstName}  type="text" name='firstName' onChange={handleInput}  />
          </div>
          <div className='flex flex-col  '>
            <label className='text-xl'  htmlFor="lastName">Last name</label>
            <input className='border bg-white md:pr-[6rem] md:pt-4' value={user.lastName} type="text" name='lastName' onChange={handleInput} />
          </div>
        </div>
        <div className='flex justify-around items-center md:gap-4 '>
          <div className='flex flex-col'>
            <label className='text-xl' htmlFor="email"> email</label>
            <input className='border bg-white md:pr-[6rem] md:pt-4' value={user.email} type="email" name='email' onChange={handleInput} />
          </div>
          <div className='flex flex-col'>
            <label className='text-xl' htmlFor="phone">phone</label>
            <input className='border bg-white md:pr-[6rem] md:pt-4' value={user.phone} type="text" name='phone' onChange={handleInput} />
          </div>
        </div>
        <div>
          <div className='flex flex-col justify-center w-full'>
            <label className=' text-xl pl-4 md:pl-0  ' htmlFor="message">Message</label>
            <textarea className='w-[90%] md:w-[35vw] h-[20vh] resize-none border mt-0 mb-0 mr-auto ml-auto bg-white' value={user.message} name="message" onChange={handleInput}></textarea>
          </div>
        </div>
          <div className='flex items-center justify-center'>
        <button className='bg-[#FCEBA3] text-[1.5rem] p-4 rounded cursor-pointer' type='submit' >Send Message</button>
      </div>
      </form>
    
      </div>                                      
     <div className='w-full flex items-center justify-center md:w-[50%] '>
      <img className='w-[70%] md:w-[60%]' src={baby} alt="image" />
     </div>
</div>

</>
  )
}

export default Contatct
