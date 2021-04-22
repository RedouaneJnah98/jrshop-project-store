import React from 'react'
import styled from 'styled-components'
import { BsArrowRightShort } from 'react-icons/bs'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = ({ name, id, price, url }) => {
  return (
    <Wrapper>
      <div className="img-hover-zoom">
        <img src={url} alt={name} />
      </div>
      <div>
        <h4>{name}</h4>
        <p className="price">{formatPrice(price)}</p>
      </div>
      <Link to={`/products/${id}`} className="link">
        Details <BsArrowRightShort />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 400px;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .link {
    color: var(--main-clr);
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 0.5rem;
  }

  svg {
    margin-left: 0.5rem;
    font-size: 1.1rem;
  }

  .img-hover-zoom {
    width: 100%;
    height: 450px;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
    overflow: hidden;

    img {
      transition: transform 0.5s, filter 1.5s ease-in-out;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
`

export default Product
