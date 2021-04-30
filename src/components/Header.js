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
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(0.45rem, 2vw, 0.6rem);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  font-weight: 500;
`

export default Header
