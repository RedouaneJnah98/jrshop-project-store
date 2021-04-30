import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import logo from '../assets/logo.svg'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { GiShoppingCart } from 'react-icons/gi'

// contexts Hooks
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import { useCartContext } from '../context/cart_context'

const Navbar = () => {
  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  const { total_items } = useCartContext()

  return (
    <>
      <Header />
      <Wrapper>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="logo-link">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <button type="button" className="nav-toggle" onClick={openSidebar}>
              <RiBarChartHorizontalLine />
            </button>
            <Link to="/cart" className="small-cart-btn">
              <GiShoppingCart className="bag-icon small-bag" />
              <span className="cart-value small-cart-value">{total_items}</span>
            </Link>
          </div>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
            {myUser && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </ul>
          <CartButtons />
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.nav`
  padding: 0.5rem 1.5rem;
  background: var(--white-clr);
  position: relative;
  z-index: 3;

  .nav-center {
    width: 90w;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 150px;
    }

    .logo-link {
      order: 2;
    }

    /* for small devices */
    .small-cart-btn {
      order: 3;
    }
    .small-bag {
      font-size: 1.5rem;
    }
    .small-cart-value {
      top: -8px;
      right: -6px;
      width: 15px;
      height: 15px;
      font-size: 0.6rem;
      padding: 10px;
    }

    .nav-toggle {
      background: transparent;
      border-color: transparent;
      font-size: 1.5rem;
      cursor: pointer;
      order: 0;
    }
  }

  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-header {
      img {
        width: 175px;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        margin: 0 1rem;
      }

      a {
        list-style: none;
        font-size: 0.85rem;
        color: var(--main-clr);
        text-transform: uppercase;
        letter-spacing: var(--spacing);
        padding: 0.4rem;

        &:hover {
          border-bottom: 2px solid var(--main-clr);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }

    .small-cart-btn {
      display: none;
    }
  }
`

export default Navbar
