import React, { useState, useEffect } from 'react'
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
  const [loading, setLoading] = useState(false)

  const componentMap = {
    All: All,
    Boys: Boys,
    Girls: Girls,
    Accessories: Accessories,
    Toys: Toys,
  }

  const SelectedComponent = componentMap[comp]

  const baseClass =
    "flex items-center gap-3 px-3 py-2 rounded-xl shadow-lg cursor-pointer transition"
  const activeClass = "bg-teal-600 text-white scale-105"
  const inactiveClass = "bg-white text-black hover:bg-gray-100"

  // trigger loader on tab change
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timer)
  }, [comp])

  return (
    <>
      <div>
        <div className="w-full">
          <img className="w-full" src={storeBanner} alt="image" />
        </div>

        <div className="flex flex-wrap justify-around gap-5 w-full p-4">
          <div
            className={`${baseClass} ${
              comp === "All" ? activeClass : inactiveClass
            }`}
            onClick={() => setComp("All")}
          >
            <img src={children} alt="" />
            <h2 className="text-2xl">All</h2>
          </div>
          <div
            className={`${baseClass} ${
              comp === "Boys" ? activeClass : inactiveClass
            }`}
            onClick={() => setComp("Boys")}
          >
            <img src={child} alt="" />
            <h2 className="text-2xl">Boys</h2>
          </div>
          <div
            className={`${baseClass} ${
              comp === "Girls" ? activeClass : inactiveClass
            }`}
            onClick={() => setComp("Girls")}
          >
            <img src={girl} alt="" />
            <h2 className="text-2xl">Girls</h2>
          </div>
          <div
            className={`${baseClass} ${
              comp === "Accessories" ? activeClass : inactiveClass
            }`}
            onClick={() => setComp("Accessories")}
          >
            <img src={accessories} alt="" />
            <h2 className="text-2xl">Accessories</h2>
          </div>
          <div
            className={`${baseClass} ${
              comp === "Toys" ? activeClass : inactiveClass
            }`}
            onClick={() => setComp("Toys")}
          >
            <img src={toys} alt="" />
            <h2 className="text-2xl">Toys</h2>
          </div>
        </div>

        {/* Loader + Component (inside same wrapper) */}
        <div className="p-4">
          {loading ? (
            <div className="w-10 h-10 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          ) : (
            SelectedComponent && <SelectedComponent />
          )}
        </div>
      </div>
    </>
  )
}

export default Store
