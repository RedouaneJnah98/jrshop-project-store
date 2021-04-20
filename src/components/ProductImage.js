import React from 'react'
import styled from 'styled-components'
import ImageOne from '../assets/backgrounds/image-1.jpg'
import ImageTwo from '../assets/backgrounds/image-2.jpg'
import { Link } from 'react-router-dom'
import { Button } from '../components/Hero'

const ProductImage = () => {
  return (
    <Wrapper>
      <article>
        <img src={ImageOne} alt="product" className="product-img" />
        <div>
          <h5>Sweatshirts Man</h5>
          <Link to="/products">
            <ShopBtn type="button">shop now</ShopBtn>
          </Link>
        </div>
      </article>
      <article>
        <img src={ImageTwo} alt="product" className="product-img" />
        <div>
          <h5>Short sleeve shirts</h5>
          <Link to="/products">
            <ShopBtn type="button">shop now</ShopBtn>
          </Link>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  article {
    position: relative;

    div {
      position: absolute;
      top: 75%;
      left: 7%;
      z-index: 2;
    }

    h5 {
      color: var(--white-clr);
      font-size: 1.5rem;
      font-weight: 500;
    }

    .product-img {
      max-width: 660px;
      width: 100%;
      height: 600px;
      object-fit: cover;
    }
  }
`

const ShopBtn = styled(Button)`
  margin-top: 0.85rem;
  width: 145px;
  height: 48px;
  font-size: 0.85rem;
`
export default ProductImage
