import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { RiUserSharedFill, RiUserReceivedFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { total_items } = useCartContext()

  return (
    <Wrapper className="cart-btn-wrapper">
      <button type="button" className="auth-btn">
        <RiUserSharedFill />
      </button>
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
  /* width: 100px; */

  .cart-btn {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    position: relative;

    .bag-icon {
      font-size: 1.8rem;
      color: var(--main-clr);
    }

    .cart-value {
      position: absolute;
      top: -10px;
      right: -3px;
      background: var(--main-clr);
      color: var(--white-clr);
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.75rem;
      padding: 12px;
    }
  }

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
