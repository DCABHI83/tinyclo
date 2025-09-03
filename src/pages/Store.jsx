import React, { useState } from 'react'
import storeBanner from '../assets/store-banner.png'
import children from '../assets/children.png'
import child from '../assets/child.png'
import accessories from '../assets/accessories.png'
import girl from '../assets/store-girl.png'
import toys from '../assets/toys.png'
import All from "../components/All.jsx"
import Boys from '../components/Boys.jsx'
import Accessories from '../components/Accessories.jsx'
import Girls from '../components/Girls.jsx'
import Toys from '../components/Toys.jsx'

const Store = () => {
  const [comp, setComp] = useState("All")

  // mapping object
  const componentMap = {
    All: All,
    Boys: Boys,
    Girls: Girls,
    Accessories: Accessories,
    Toys: Toys,
  }

  // get the component based on state
  const SelectedComponent = componentMap[comp]

  return (
    <>
      <div>
        <div className='w-full'>
          <img className='w-full' src={storeBanner} alt="image" />
        </div>

        <div className='flex flex-wrap justify-around gap-5 w-full p-4'>
          <div
            className='flex items-center gap-3 px-3 rounded-xl shadow-lg shadow-slate-950 cursor-pointer'
            onClick={() => setComp("All")}
          >
            <img src={children} alt="" />
            <h2 className='text-2xl'>All</h2>
          </div>
          <div
            className='flex items-center gap-3 px-3 rounded-xl shadow-lg shadow-slate-950 cursor-pointer'
            onClick={() => setComp("Boys")}
          >
            <img src={child} alt="" />
            <h2 className='text-2xl'>Boys</h2>
          </div>
          <div
            className='flex items-center gap-3 px-3 rounded-xl shadow-lg shadow-slate-950 cursor-pointer'
            onClick={() => setComp("Girls")}
          >
            <img src={girl} alt="" />
            <h2 className='text-2xl'>Girls</h2>
          </div>
          <div
            className='flex items-center gap-3 px-3 rounded-xl shadow-lg shadow-slate-950 cursor-pointer'
            onClick={() => setComp("Accessories")}
          >
            <img src={accessories} alt="" />
            <h2 className='text-2xl'>Accessories</h2>
          </div>
          <div
            className='flex items-center gap-3 px-3 rounded-xl shadow-lg shadow-slate-950 cursor-pointer'
            onClick={() => setComp("Toys")}
          >
            <img src={toys} alt="" />
            <h2 className='text-2xl'>Toys</h2>
          </div>
        </div>

        <div className="p-4">
          {SelectedComponent && <SelectedComponent />}
        </div>
      </div>
    </>
  )
}

export default Store
