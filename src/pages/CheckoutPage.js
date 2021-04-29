import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
import image from '../assets/backgrounds/product-bcg-1.jpg'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <PageHero
        title="checkout"
        subtitle="paye with your credit cart"
        image={image}
      />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h3>your cart is empty</h3>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .empty {
    text-align: center;
  }

  h3 {
    margin-bottom: 2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }

  .btn {
    padding: 0.5rem 1.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`
export default CheckoutPage
