import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const { cart, clearCart } = useCartContext()

  return (
    <Wrapper>
      <div className="section section-center">
        <CartColumns />
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        <hr />
        <div className="btn-container">
          <Link to="/products" className="btn">
            continue shopping
          </Link>
          <button type="button" className="btn clear" onClick={clearCart}>
            clear shopping cart
          </button>
        </div>
        <CartTotals />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--second-clr-2);

  .btn-container {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    .btn {
      padding: 0.35rem 1rem;
      text-transform: capitalize;
      font-weight: 300;
      letter-spacing: var(--spacing);
      font-size: clamp(0.9rem, 2vw 1rem);
      border-color: transparent;
      cursor: pointer;
    }

    .clear {
      background: #fb3e3e;

      &:hover {
        transition: 0.3s all linear;
        background: #f40000;
      }
    }
  }
`

export default CartContent
