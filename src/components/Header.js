import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <p>free delivrey</p>
      <p>the best sales</p>
      <p>919.309.2735 x1716</p>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background: var(--main-clr);
  color: var(--white-clr);
  padding: 0.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: var(--spacing);
  font-weight: 400;
`

export default Header
