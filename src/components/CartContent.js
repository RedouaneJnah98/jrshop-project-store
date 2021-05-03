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
  .btn-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .btn {
      padding: 0.5rem 1rem;
      text-transform: capitalize;
      font-weight: 300;
      letter-spacing: var(--spacing);
      font-size: 0.8rem;
      border-color: transparent;
      cursor: pointer;
      margin-top: 1rem;
    }

    .clear {
      background: #fb3e3e;

      &:hover {
        transition: 0.3s all linear;
        background: #f40000;
      }
    }
  }

  @media (max-width: 576px) {
    .btn-container {
      text-align: center;
      .btn {
        width: 100%;
        font-size: 1rem;
      }
    }
  }
`

export default CartContent
