import React from 'react'
import styled from 'styled-components'
import team from '../utils/teamData'
import SinglePerson from './SinglePerson'

const TeamManagement = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <section className="box-container">
          <h1>Founders</h1>

          <article className="team-container">
            {team.map((item) => {
              return <SinglePerson key={item.id} {...item} />
            })}
          </article>
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--second-clr-2);
  padding: 2rem 0 4rem 0;

  .team-container {
    margin-top: 2.5rem;
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3rem);
    font-weight: 600;
  }

  @media (min-width: 768px) {
    padding: 4rem 0 8rem 0;
  }

  @media (min-width: 992px) {
    padding: 6rem 0;

    .team-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }
  }
`

export default TeamManagement
