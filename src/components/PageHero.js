import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bcgImage from '../assets/backgrounds/product-bcg-2.jpg'

const PageHero = () => {
  return (
    <Wrapper>
      <div className="title">
        <p>50% off our products</p>
        <h1>all products</h1>
      </div>
      <div className="img-container">
        <img src={bcgImage} alt="background product" className="bcg-img" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 40vh;

  .bcg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: center;
    top: 0;
    left: 0;
  }

  .title {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    max-width: (--max-width);
  }
`

export default PageHero
