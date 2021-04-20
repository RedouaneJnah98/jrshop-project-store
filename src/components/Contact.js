import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <div className="section-center">
      <Wrapper>
        <article>
          <h1>
            WE’RE WORKING HARD. DAY AFTER DAY. SIGN UP TO <br /> STAY UP TO
            DATE.
          </h1>
          <p>
            Team JRShop is a community of people who work hard and don't believe
            in excuses. It is made up of employees, customers, ambassadors,
            first responders, teachers, military, medical professionals, hard
            working people from nearly every field and athletes of all skill
            levels from all over the globe.
          </p>
        </article>
        <form
          className="contact-form"
          action="https://formspree.io/f/mqkwaypg"
          method="POST"
        >
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email"
            name="_replyto"
          />
          <button type="submit" className="submit-btn">
            Subscribe
          </button>
        </form>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 0;

  h1 {
    margin-bottom: clamp(0.5rem, 5vw, 1rem);
    font-size: clamp(1.1rem, 2vw, 1.8rem);
  }

  p {
    font-weight: 300;
    font-size: clamp(0.85rem, 2vw, 1rem);
    max-width: 550px;
    width: 100%;
    line-height: 1.7;
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .email-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.6rem 1rem;
    border: 2px solid var(--main-clr);
  }

  .email-input::placeholder {
    color: var(--main-clr);
    text-transform: capitalize;
  }

  .submit-btn {
    background: var(--main-clr);
    color: var(--white-clr);
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      transition: 0.4s all linear;
      background: var(--white-clr);
      color: var(--main-clr);
    }
  }
`

export default Contact
