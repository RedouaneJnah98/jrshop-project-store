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
          <Link to="/products" className="shopping-btn">
            continue shopping
          </Link>
          <button type="button" className="clear-cart-btn" onClick={clearCart}>
            clear cart
          </button>
        </div>
        <CartTotals />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--second-clr-2);
`

export default CartContent
