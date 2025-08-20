import React from 'react'
import news from '../assets/news.png'
import anotherNews from '../assets/anotherNews.png'
import news24 from '../assets/news24.png'
import hungama from '../assets/humgama.png'
import ary from '../assets/ary.png'
const Fetured = () => {
  return (
    <>
    <div>
       <div className="md:p-[4rem] p-2">
        <h1 className="text-4xl md:text-5xl">As featured in</h1>
        <div className="w-[13rem] h-[3.5px] bg-[#EBB5BB] md:w-[17.5rem]"></div>
      </div>
      <div className='w-[full] flex items-center justify-around mt-4'>
        <div>
            <img className='w-[12vw]' src={hungama} alt="image"/>
        </div>
        <div>
            <img className='w-[20vw]'  src={news24} alt="image"/>
        </div>
        <div>
            <img className='w-[12vw]' src={anotherNews} alt="image"/>
        </div>
        <div>
            <img className='w-[20vw]' src={news} alt="image"/>
        </div>
        <div>
            <img className='w-[12vw]' src={ary} alt="image"/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Fetured
