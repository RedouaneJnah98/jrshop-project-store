import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

const Hero = ({ slides }) => {
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          const { title, subTitle, image, alt, label } = slide
          return (
            <HeroSlide key={index}>
              <HeroSlider>
                <HeroImage src={image} alt={alt} />
                <HeroContent>
                  <h5>{subTitle}</h5>
                  <h1>{title}</h1>
                  <button type="button" className="btn">
                    {label}
                  </button>
                </HeroContent>
              </HeroSlider>
            </HeroSlide>
          )
        })}
        <SliderButtons>
          <PrevBtn />
          <NextBtn />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`

const HeroWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`
const HeroContent = styled.div`
  .btn {
    background: var(--white-clr);
    border-color: transparent;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 1rem;
  }
`

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: var(--white-clr);
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: var(--second-clr);
    transform: scale(1.05);
  }
`

const NextBtn = styled(IoArrowForward)`
  ${arrowButtons}
`
const PrevBtn = styled(IoArrowBack)`
  ${arrowButtons}
`

export default Hero
