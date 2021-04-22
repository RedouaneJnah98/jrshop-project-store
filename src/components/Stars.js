import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ stars, reviews }) => {
  console.log(stars)
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })

  return (
    <Wrapper>
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  align-items: center;

  span {
    font-size: 0.75rem;
    margin-right: 0.25rem;
  }

  .reviews {
    font-size: 0.75rem;
    margin-left: 0.5rem;
  }
`

export default Stars
