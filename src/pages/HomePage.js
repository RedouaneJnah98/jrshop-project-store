import React from 'react'
import {
  FeaturedProducts,
  Hero,
  Services,
  Partners,
  Contact,
  ProductImage,
} from '../components'
import { SliderData } from '../utils/SliderData'

const HomePage = () => {
  return (
    <div>
      <Hero slides={SliderData} />
      <FeaturedProducts />
      <ProductImage />
      <Partners />
      <Services />
      <Contact />
    </div>
  )
}

export default HomePage
