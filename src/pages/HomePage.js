import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { SliderData } from '../utils/SliderData'

const HomePage = () => {
  return (
    <div>
      <Hero slides={SliderData} />
    </div>
  )
}

export default HomePage
