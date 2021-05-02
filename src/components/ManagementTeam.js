import React from 'react'
import styled from 'styled-components'
import { teamData } from '../utils/teamData'
import SinglePerson from './SinglePerson'

const ManagementTeam = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="box-container">
          <h1>management team</h1>
          <article>
            {teamData.map((item) => {
              return <SinglePerson key={item.id} {...item} />
            })}
          </article>
        </div>
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
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export default ManagementTeam
