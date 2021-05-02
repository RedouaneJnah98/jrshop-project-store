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

  .team-container {
    margin-top: 1.5rem;
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3rem);
    font-weight: 600;
  }

  @media (max-width: 576px) {
    padding: 2rem 0 4rem 0;
  }

  @media (min-width: 992px) {
    /* padding-top: 5rem;
    margin-top: 10rem; */

    .team-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      margin-bottom: 0;
    }
    /* .box-container {
      transform: translateY(-30%);
    } */
  }
`

export default TeamManagement
