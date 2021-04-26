import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
  const { cart } = useCartContext()

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <h2 className="empty">Your cart is empty</h2>
        <Link to="/products" className="btn">
          fill it
        </Link>
      </Wrapper>
    )
  }

  return (
    <main>
      <CartContent />
    </main>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btn {
    background: var(--main-clr);
    color: var(--white-clr);
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 2px;
    padding: 0.5rem 2rem;
    margin-top: 1.5rem;
  }
`

export default CartPage
