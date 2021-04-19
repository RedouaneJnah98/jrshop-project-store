import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const timeout = useRef(null)

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout)
    }

    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout)
    }

    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }

    timeout.current = setTimeout(nextSlide, 5000)

    return function () {
      if (timeout.current) {
        clearTimeout(timeout)
      }
    }
  }, [current, length])

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          const { title, subTitle, image, alt, label } = slide
          return (
            <HeroSlide key={index}>
              {index === current && (
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
              )}
            </HeroSlide>
          )
        })}
        <SliderButtons>
          <button type="button" onClick={prevSlide} className="arrow-buttons">
            <IoArrowBack />
          </button>
          <button type="button" onClick={nextSlide} className="arrow-buttons">
            <IoArrowForward />
          </button>
          {/* <PrevBtn onClick={prevSlide} />
          <NextBtn onClick={nextSlide} /> */}
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

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    z-index: 2;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
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
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  width: calc(100% - 100px);

  /* CONTENT */

  h5 {
    font-size: 0.85rem;
    color: var(--white-clr);
    font-weight: 500;
  }

  h1 {
    font-size: 3.75rem;
    color: var(--white-clr);
    width: 300px;
    line-height: 1.1;
  }

  .btn {
    background: var(--white-clr);
    border-color: transparent;
    text-transform: uppercase;
    font-weight: 600;
    font-size: clamp(0.85rem, 2vw, 1rem);
    margin-top: clamp(1.5rem, 5vw, 2.5rem);
    width: clamp(155px, 20vw, 180px);
    height: clamp(45px, 10vw, 55px);
  }
`

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;

  .arrow-buttons {
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
  border-color:transparent;
  outline:none;

  &:hover {
    background: var(--second-clr);
    transform: scale(1.05);
  }
`

/* const arrowButtons = css`
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
` */

export default Hero
