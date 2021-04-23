import React from 'react'
import styled from 'styled-components'
import { BsArrowRightShort } from 'react-icons/bs'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = ({ name, id, price, url }) => {
  return (
    <Wrapper>
      <img src={url} alt={name} />
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

    h4 {
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 500;
    }
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

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`

export default Product
