import React from 'react'
import styled from 'styled-components'
import { HeroSlider } from './Hero'
import { HeroImage } from './Hero'
import { HeroContent } from './Hero'
import bcgImage from '../assets/backgrounds/product-bcg-2.jpg'

const PageHero = () => {
  return (
    <Wrapper>
      <HeroSlider>
        <ProductHero src={bcgImage} alt="hero background product-img" />
        <HeroContent>
          <h5>50% off this month</h5>
          <h1>all products</h1>
        </HeroContent>
      </HeroSlider>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 40vh;

  h1,
  h5 {
    text-transform: uppercase;
    width: 400px;
  }
`

const ProductHero = styled(HeroImage)`
  height: 100%;
  width: 100%;
`

export default PageHero
