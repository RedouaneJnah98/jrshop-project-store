import React from 'react'
import styled from 'styled-components'
import { BiPlus, BiMinus } from 'react-icons/bi'

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <Wrapper className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}>
        <BiMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <BiPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 0.5rem;

  h2 {
    margin-bottom: 0;
  }

  .amount-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 1rem;
    cursor: pointer;
  }
`

export default AmountButtons
