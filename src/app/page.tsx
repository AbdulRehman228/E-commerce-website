import React from 'react'
import Nav from './Navigation/Nav'
import Hero from './HeroSection/Hero'
import Cont from './Contant/Cont'
import BestSeller from './BestSeller/BestSeller'
import Shop from './Shop/Shop'
import OurProducts from './Our Products/OurProducts'
import FeatureCollection from './FeatureCollections/FeatureCollection'
import Card from './Card/Card'
import Community from './Community/Community'


const page = () => {
  return (
    <div className='bg-gray-100'>
      <Nav/>
      <Hero />
      <Cont/>
      <BestSeller/>
      <Shop/>
      <OurProducts/>
      <FeatureCollection/>
      <Card/>
      <Community/>
    </div>
  )
}

export default page