import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import HowItworks from '../components/HowItworks'
import WhyRent from '../components/WhyRent'
import MoreCards from '../components/MoreCards'
import MemberShip from '../components/MemberShip'
import Clean from '../components/Clean'
import Fetured from '../components/Fetured'

const Home = () => {
  return (
  <>
  <div>
 <Hero/>
  <Cards/>
  <HowItworks/>
  <WhyRent/>
  <MoreCards/>
  <MemberShip/>
  <Clean/>
  <Fetured/>
  </div>
 
  </>
  )
}

export default Home
