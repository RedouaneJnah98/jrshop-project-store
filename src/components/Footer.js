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
  padding: 2rem 0;

  .footer-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* max-width: var(--max-width); */
    /* margin: 0 auto; */
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
  }
  p {
    display: none;
  }

  @media (max-width: 600px) {
    h5 {
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 992px) {
    p {
      display: grid;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 300;
      color: #878787;

      &:hover {
        border-bottom: 1px solid #878787;
      }
    }

    .footer-info {
      margin-top: 1rem;
    }
  }

  h5 {
    font-size: clamp(0.75rem, 2vw, 0.85rem);
    font-weight: 300;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
`

export default Footer
