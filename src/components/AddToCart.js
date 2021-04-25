import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GoCheck } from 'react-icons/go'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {
  const { id, colors, sizes } = product
  const [mainColor, setMainColor] = useState(colors[0])
  const [mainSize, setMainSize] = useState(sizes[0])

  return (
    <Wrapper>
      <div className="container">
        <span>color :</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                type="button"
                style={{ background: color }}
                className={`${
                  mainColor === color ? 'color-btn active' : 'color-btn'
                }`}
                key={index}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <GoCheck /> : null}
              </button>
            )
          })}
        </div>
        <span>size : {mainSize}</span>
        <div>
          {sizes.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                className={`${
                  mainSize === item
                    ? 'size-btn-product active-size'
                    : 'size-btn-product'
                }`}
                onClick={() => setMainSize(item)}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>
      <div className="add-btn-container">
        <Link to="/cart" className="add-btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    span {
      color: var(--second-clr);
      font-weight: 300;
      text-transform: uppercase;
    }

    div {
      display: flex;
      margin: 1rem 0;
    }
    .color-btn {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      margin-right: 0.5rem;
      border: none;
      background: #222;
      opacity: 0.5;
      cursor: pointer;
      outline: none;
      position: relative;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--white-clr);
      }
    }

    .active {
      opacity: 1;
    }
  }

  .size-btn-product {
    width: 40px;
    height: 40px;
    font-size: 0.75rem;
    font-weight: 300;
    border-color: #e5e9ee;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
  }

  .active-size {
    background: var(--main-clr);
    color: var(--white-clr);
  }

  .add-btn-container {
    margin-top: 2rem;

    .add-btn {
      background: var(--main-clr);
      color: var(--white-clr);
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      letter-spacing: var(--spacing);

      &:hover {
        transition: 0.3s ease-in-out;
        opacity: 0.9;
      }
    }
  }
`

export default AddToCart
