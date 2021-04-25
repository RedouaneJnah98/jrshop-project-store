import React from 'react'
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { RiFacebookLine } from 'react-icons/ri'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-section">
        <div>
          <RiFacebookLine />
          <AiOutlineTwitter />
          <AiOutlineYoutube />
          <AiOutlineInstagram />
        </div>
        <div className="footer-info">
          <h5> ©️ {new Date().getFullYear()} all rights reserved.</h5>
          <p className="privacy">privacy policy</p>
          <p>terms & conditions</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: var(--main-clr);
  color: var(--white-clr);
  padding: 1rem;

  .footer-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  svg {
    cursor: pointer;
    font-size: 1.4rem;
    margin: 0 0.5rem;

    &:hover {
      color: #4892ff;
    }
  }

  .footer-info {
    display: flex;
    align-items: center;

    .privacy {
      margin: 0 1.5rem;
    }

    p {
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 300;
      color: #878787;

      &:hover {
        border-bottom: 1px solid #878787;
      }
    }
  }

  h5 {
    font-size: 0.85rem;
    font-weight: 300;
    text-transform: capitalize;
  }
`

export default Footer
