import React, { useState } from 'react'
import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const SinglePerson = ({ id, text, name, position, image }) => {
  const [showText, setShowText] = useState(false)

  return (
    <Wrapper>
      <div key={id} className="person">
        <img src={image} alt="ceo founder" className="img-person" />
        <header className="infos">
          <div className="name_icon">
            <h5>{name}</h5>
            <button
              type="button"
              className="chevron"
              onClick={() => setShowText(!showText)}
            >
              {showText ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
          <h6>{position}</h6>
          {showText && <p className="text-animation">{text}</p>}
        </header>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .img-person {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  .infos {
    margin-top: 2rem;
    border-top: 1px solid var(--main-clr);
    padding-top: 1rem;

    .name_icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    h5 {
      font-size: 1.3rem;
      font-weight: 400;
    }
    h6 {
      margin: 0.5rem 0;
      font-size: 1rem;
      font-weight: 300;
      font-family: 'Sora', sans-serif;
      font-size: clamp(0.9rem, 2vw, 1rem);
    }
    p {
      color: #17494d;
      font-weight: 300;
      font-family: 'Sora', sans-serif;
      font-size: clamp(0.85rem, 2vw, 1rem);
      line-height: 1.7;
    }
    .text-animation {
      transition: all 2s ease-in-out;
    }
  }

  .chevron {
    background: transparent;
    font-size: 1.3rem;
  }

  @media (min-width: 992px) {
    .person {
      max-width: 370px;
      width: 100%;
    }
  }
`

export default SinglePerson
