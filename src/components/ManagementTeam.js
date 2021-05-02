import React from 'react'
import styled from 'styled-components'
import { teamData } from '../utils/teamData'
import SinglePerson from './SinglePerson'

const ManagementTeam = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h1>management team</h1>
        <article>
          {teamData.map((item) => {
            return <SinglePerson key={item.id} {...item} />
          })}
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h1 {
    font-size: clamp(1.5rem, 5vw, 2.8rem);
    font-weight: 600;
    text-transform: capitalize;
  }

  @media (min-width: 992px) {
    article {
      /* display: flex;
      justify-content: space-between;
      flex-wrap: wrap; */
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
      column-gap: 3rem;
      row-gap: 5rem;
      /* max-width: 00px; */
      width: 100%;

      img {
        /* object-position: bottom top; */
        /* height: 350px; */
      }
    }
  }
`

export default ManagementTeam
