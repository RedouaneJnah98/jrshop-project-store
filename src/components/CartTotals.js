import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>{' '}
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn checkout">
          proceed to checkout
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  article {
    border: 1px solid var(--second-clr);
    padding: 1.5rem 3rem;
    border-radius: var(--radius);
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    text-transform: capitalize;
  }

  h4 {
    margin-top: 1.5rem;
    font-size: clamp(1rem, 2vw, 1.5rem);
    letter-spacing: var(--spacing);
  }

  h5 {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    font-weight: 500;
    letter-spacing: 1px;
  }

  p {
    margin: 1rem 0;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    font-weight: 300;
    letter-spacing: 1px;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
  }

  div {
    position: relative;
  }

  .checkout {
    width: 100%;
    position: absolute;
    margin-top: 1rem;
    text-align: center;
    padding: 0.5rem 0;
    border-radius: var(--radius);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
`

export default CartTotals
