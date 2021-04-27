import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'

const CartItem = ({ id, name, price, size, image, color, amount }) => {
  const { removeItem, toggleAmount } = useCartContext()

  const increase = () => {}
  const decrease = () => {}

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt="" />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color :{' '}
            <span className="product-clr" style={{ background: color }}>
              {' '}
            </span>
          </p>
          <p className="size">
            size : <span className="size-nm">{size}</span>
          </p>
          <div className="small-price">{formatPrice(price)}</div>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        className="remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .subtotal,
  .price {
    display: none;
  }

  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 100px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .name {
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .title {
    grid-template-rows: 100px;
    display: grid;
    grid-template-columns: 100px 100px;
    align-items: center;
    text-align: left;
    gap: 1rem;

    .color,
    .size {
      font-size: 0.75rem;
      color: var(--second-clr);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .product-clr {
      width: 0.5rem;
      height: 0.5rem;
      display: inline-block;
      background: red;
      border-radius: 50%;
      margin-left: 0.5rem;
    }

    .size-nm {
      color: var(--main-clr);
      margin-left: 0.5rem;
    }

    .small-price {
      font-size: 0.75rem;
      font-weight: 600;
    }
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .remove-btn {
    background: transparent;
    border-color: transparent;
    width: 1.5rem;
    height: 1.5rem;
    color: #f40000;
    cursor: pointer;
    font-size: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* letter-spacing: var(--spacing); */
  }

  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 768px) {
    .price,
    .subtotal {
      display: block;
    }
    .small-price {
      display: none;
    }
  }
`

export default CartItem
