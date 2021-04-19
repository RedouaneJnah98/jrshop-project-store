import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="header">
          <h2>Custom Furniture Built Only For You</h2>
          <p>
            It wasn’t easy, but after countless hours of research and way too
            much coffee, we custom engineered our own Pyca™ fabric. We knew we
            needed something durable yet breathable which our tri-blend fabric
            delivers and then some.
          </p>
        </div>
        <div className="cards-container">
          {services.map((item) => {
            const { id, text, title, icon } = item
            return (
              <div className="card" key={id}>
                <div className="infos">
                  <img src={icon} alt={title} className="icon" />
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-top: clamp(2.5rem, 5vw, 4rem);
  padding-bottom: clamp(2rem, 5vw, 4rem);

  .header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    h2 {
      width: 260px;
    }

    p {
      width: 500px;
      font-weight: 300;
      font-size: 1rem;
    }
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem 1rem;
    margin-top: 3rem;

    .card {
      padding: 3rem 1.5rem;
      border-radius: 5px;
      background: #eafeff;
      box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
      cursor: pointer;

      &:hover {
        background: var(--white-clr);
        transition: 0.4s all linear;
      }

      .icon {
        margin-bottom: 1rem;
      }

      .infos {
        text-align: center;
      }

      h4 {
        margin: 0.5rem 0;
      }
      p {
        font-weight: 300;
      }
    }
  }
`

export default Services
