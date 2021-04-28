import React, { useState } from 'react'
import logo from '../assets/white-logo.svg'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { VscClose } from 'react-icons/vsc'
import { links } from '../utils/constants'
import styled from 'styled-components'
import { useUserContext } from '../context/user_context'
import { getUniqueValues } from '../utils/helpers'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai'
import { ImPinterest } from 'react-icons/im'

const Sidebar = () => {
  const { products } = useProductsContext()
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  const { loginWithRedirect, logout, myUser } = useUserContext()

  const [active, setActive] = useState(true)
  const brands = getUniqueValues(products, 'collection')

  return (
    <SidebarWrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="center-sidebar">
          <div className="sidebar-header">
            <img src={logo} alt="logo" />
            <button type="button" className="close-btn" onClick={closeSidebar}>
              <VscClose />
            </button>
          </div>
          <div className="btns-container">
            <button
              type="button"
              className={`${!active ? 'transparent-btn' : null}`}
              onClick={() => setActive(!active)}
            >
              men
            </button>
            <button
              type="button"
              className={`${active ? 'transparent-btn' : null}`}
              onClick={() => setActive(!active)}
            >
              women
            </button>
          </div>
          <ul className="links">
            {brands.map((link, index) => {
              return (
                <Link to="/products" key={index} onClick={closeSidebar}>
                  {link}
                </Link>
              )
            })}
          </ul>
          <hr />
          <ul className="small-links">
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li>
                  <Link to={url} key={id} onClick={closeSidebar}>
                    {text}
                  </Link>
                </li>
              )
            })}
            {myUser && (
              <li>
                <Link to="/checkout" onClick={closeSidebar}>
                  checkout
                </Link>
              </li>
            )}
            {myUser ? (
              <button
                type="button"
                className="link"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                logout
              </button>
            ) : (
              <button
                type="button"
                className="link"
                onClick={loginWithRedirect}
              >
                login
              </button>
            )}
          </ul>
          <div className="social-media">
            <a href="https://twitter.com">
              <AiOutlineInstagram />
            </a>
            <a href="https://twitter.com">
              <AiOutlineTwitter />
            </a>
            <a href="https://twitter.com">
              <AiFillYoutube />
            </a>
            <a href="https://twitter.com">
              <ImPinterest />
            </a>
          </div>
          <div className="footer">
            <p>©️ Copyright {new Date().getFullYear()}</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </aside>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0rem;
  }

  .link {
    background: transparent;
    border-color: transparent;
    text-align: left;
    font-size: 0.9rem;
    color: var(--white-clr);
    font-weight: 300;
    text-transform: capitalize;
    letter-spacing: 1px;
    cursor: pointer;
  }

  hr {
    background: var(--white-clr);
  }

  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    color: var(--white-clr);
    letter-spacing: var(--spacing);
    transition: var(--transition);
    text-transform: capitalize;
    font-weight: 700;

    &:hover {
      padding: 1rem 1.5rem;
      padding-left: 2rem;
      color: var(--second-clr);
    }
  }
  .small-links {
    display: grid;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .small-links a {
    font-weight: 300;
    color: var(--white-clr);
    font-size: 0.85rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
  .social-media {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: inline-block;
      margin-right: 1rem;
      font-size: 1.5rem;
      color: var(--white-clr);
      background: #373738;
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        opacity: 0.5;
        transition: var(--transition);
      }
    }
  }

  .close-btn {
    background: transparent;
    border-color: transparent;
    color: var(--main-clr);
    background: var(--white-clr);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--sidebar-clr);
    transition: var(--transition);
    transform: translate(-100%);
    padding-bottom: 2rem;
    z-index: 100;
    scroll-behavior: smooth;
    overflow-y: auto;
  }
  .show-sidebar {
    transform: translate(0%);
    z-index: 999;
  }

  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  .btns-container {
    margin: 1.5rem 0 0.5rem 0;
    display: flex;

    button {
      background: var(--white-clr);
      color: var(--main-clr);
      width: 100%;
      padding: 0.6rem 0;
      border-color: transparent;
      text-transform: capitalize;
      font-size: 0.9rem;
      letter-spacing: var(--spacing);
      font-weight: 300;
      margin-right: 1.5rem;
      border-radius: 0px;
      cursor: pointer;
    }

    .transparent-btn {
      background: transparent;
      border: 2px solid var(--white-clr);
      color: var(--white-clr);
    }
  }

  .footer {
    display: flex;
    margin-top: 2rem;

    p {
      margin-right: 1rem;
      font-size: 0.7rem;
      font-weight: 300;
      color: var(--second-clr);

      &:nth-child(1) {
        color: var(--white-clr);
      }
    }
  }

  @media (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
