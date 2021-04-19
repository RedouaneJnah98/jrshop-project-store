import React from 'react'
import {
  FeaturedProducts,
  Hero,
  Services,
  Partners,
  Contact,
} from '../components'
import { SliderData } from '../utils/SliderData'

const HomePage = () => {
  return (
    <div>
      <Hero slides={SliderData} />
      <FeaturedProducts />
      <Partners />
      <Services />
      <Contact />
    </div>
  )
}

export default HomePage
