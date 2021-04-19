import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import logo from '../assets/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
// contexts Hooks
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Navbar = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <button type="button" className="nav-toggle">
              <GiHamburgerMenu />
            </button>
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
          </ul>
          <CartButtons />
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.nav`
  height: 5rem;
  padding: 0.7rem 1.5rem;
  background: var(--white-clr);

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
      width: 175px;
    }

    .nav-toggle {
      background: transparent;
      border-color: transparent;
      font-size: 2rem;
      cursor: pointer;
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
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 1rem;
      }

      a {
        list-style: none;
        font-size: 1.2rem;
        color: var(--main-clr);
        text-transform: uppercase;
        padding: 0.5rem;

        &:hover {
          border-bottom: 2px solid var(--main-clr);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar
