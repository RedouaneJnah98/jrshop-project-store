import React from 'react'
import styled from 'styled-components'
import { companies } from '../utils/SliderData'

const Partners = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h4>Trusted by 20 000+ companies</h4>
        <div className="container">
          {companies.map((logo, index) => {
            return (
              <img
                src={logo.image}
                alt="logo"
                className="logo-company"
                key={index}
              />
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    color: var(--second-clr);
    text-align: center;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .logo-company {
    max-width: 120px;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    .container {
      justify-content: center;
    }
    .logo-company {
      margin: 0 1rem;
    }
  }
`

export default Partners
