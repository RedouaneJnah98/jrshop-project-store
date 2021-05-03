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
  margin-top: 4rem;
  h1 {
    font-size: clamp(2.2rem, 5vw, 3rem);
    font-weight: 600;
    text-transform: capitalize;
  }

  @media (min-width: 992px) {
    padding: 4rem 0 8rem 0;

    article {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
      column-gap: 3rem;
      row-gap: 2.5rem;
      width: 100%;
      margin-top: 2.5rem;
    }
  }
`

export default ManagementTeam
