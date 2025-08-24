import React from 'react'
import responsible from '../assets/responsible.png'

const Included = () => {
  return (
  <>
  <div className='flex justify-center md:p-15 p-10'>
    <h1 className='md:text-5xl text-2xl font-medium text-[#147AA9] '>What's included In A Membership</h1>
  </div>

  <div className='bg-[#FDB2B2]'>
<img src={responsible} alt="image" />
  </div>
  </>
  )
}

export default Included
