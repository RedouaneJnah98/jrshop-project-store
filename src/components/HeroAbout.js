import React from 'react'
import styled from 'styled-components'
import firstImage from '../assets/backgrounds/about-bcg.jpg'
import smallImage from '../assets/backgrounds/about-bcg-2.jpg'

const HeroAbout = () => {
  return (
    <Wrapper className="section-center">
      <article className="title">
        <h5>our story</h5>
        <h1>born in brooklyn</h1>
        <p>
          What does this mean? It means that all of our shoes are made by
          top-rated factories that meet the highest standards of labor and
          environmental practices.{' '}
        </p>
      </article>
      <article className="img-container">
        <img src={firstImage} alt="background" className="main-img" />
        <img src={smallImage} alt="small img" className="small-img" />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  align-items: center;

  h5 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: clamp(0.65rem, 2vw, 0.85rem);
    line-height: 1;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    line-height: 1.1;
  }

  p {
    line-height: 2;
    font-weight: 400;
    max-width: 45em;
    font-size: clamp(0.9rem, 2vw, 1rem);
    margin-top: 0.5rem;
  }

  .img-container {
    display: none;
  }

  @media (min-width: 992px) {
    height: clac(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 7rem;
    .img-container {
      max-width: 700px;
      display: block;
      position: relative;

      .main-img {
        position: relative;
        width: 100%;
        height: 380px;
        display: block;
        object-fit: cover;
      }
      .small-img {
        width: 250px;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateX(-30%);
      }
    }
  }
`

export default HeroAbout
