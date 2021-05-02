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
  padding: 2rem 0 4rem 0;
  background: var(--second-clr-2);

  .team-container {
    margin-top: 1.5rem;
  }

  h1 {
    font-size: clamp(1.5rem, 5vw, 2.8rem);
    font-weight: 600;
  }

  @media (min-width: 992px) {
    padding-top: 5rem;
    padding-bottom: 0;
    margin-top: 10rem;
    height: 80vh;

    .team-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      margin-bottom: 0;
    }
    .box-container {
      transform: translateY(-40%);
    }
  }
`

export default TeamManagement
