import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <p>free U.S shipping over $150 USD | free int'l shipping over $200 USD</p>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background: var(--main-clr);
  color: var(--white-clr);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.45rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  font-weight: 500;

  @media (min-width: 576px) {
    font-size: 0.7rem;
  }
`

export default Header
