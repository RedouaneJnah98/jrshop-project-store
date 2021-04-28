import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { RiUserSharedFill, RiUserReceivedFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { total_items } = useCartContext()
  const { loginWithRedirect, logout, myUser } = useUserContext()

  return (
    <Wrapper className="cart-btn-wrapper">
      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >
          <RiUserReceivedFill />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          <RiUserSharedFill />
        </button>
      )}
      <Link to="/cart" className="cart-btn">
        <GiShoppingCart className="bag-icon" />
        <span className="cart-value">{total_items}</span>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .auth-btn {
    background: transparent;
    border-color: transparent;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 0.5rem;
    padding-left: 10px;
    border-left: 2px solid var(--second-clr);
  }
`

export default CartButtons
