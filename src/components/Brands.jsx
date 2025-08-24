import React from 'react'
import mockly from '../assets/mockly.png'
import firstCry from '../assets/firstCry.png'
import Gini from '../assets/Gini.png'
import hopScotch from '../assets/hopScotch.png'
const Brands = () => {
    const images = [mockly,firstCry,Gini,hopScotch]
  return (
   <>
    <div>
        <div className=' text-center p-5 md:p-10'>
            <h1 className='text-2xl text-[#FC6565] md:text-6xl md:font-[525] '>Some Brands We Work With</h1>
        </div>
        <div className='flex gap-5 p-10 md:gap-[5rem]  justify-center'>

        {images.map((CurElem,index)=>{
            return(
                <img key={index} src={CurElem} className='w-[20%] md:w-[10%] rounded-xl' alt="image" />
            )
        })}
        </div>
    </div>
   
   </>
  )
}

export default Brands
