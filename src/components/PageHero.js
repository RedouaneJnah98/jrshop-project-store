import React from 'react'
import styled from 'styled-components'
import { HeroSlider } from './Hero'
import { HeroImage } from './Hero'
import { HeroContent } from './Hero'

const PageHero = ({ title, subtitle, image }) => {
  return (
    <Wrapper>
      <HeroSlider>
        <ProductHero src={image} alt="hero background product-img" />
        <HeroContent>
          <h5>{subtitle}</h5>
          <h1>{title}</h1>
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
  }

  @media (min-width: 992px) {
    h1 {
      width: 400px;
    }
  }
`

const ProductHero = styled(HeroImage)`
  height: 100%;
  width: 100%;
`

export default PageHero
