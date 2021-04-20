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

  h4 {
    color: var(--second-clr);
    text-align: center;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .logo-company {
    max-width: 160px;
    width: 100%;
  }
`

export default Partners
