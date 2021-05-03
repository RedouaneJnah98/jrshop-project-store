import React from 'react'
import styled from 'styled-components'
import image from '../assets/backgrounds/about-img.jpg'

const Article = () => {
  return (
    <Wrapper className="section-center">
      <div className="container">
        <img src={image} alt="CEO Founder" className="img-about" />
        <div className="title">
          <h5>Founed in 2014, we’re Brooklyn’s first</h5>
          <h2>sneaker brand</h2>
          <h6>
            We know how important it is to have a dependable pair of go-to
            shoes. In this city, sneakers are literally vehicles for your great
            taste. And, over time, they become trusted and well-loved friends.{' '}
          </h6>
        </div>
      </div>
      <article className="text-container">
        <div>
          <p>
            You might also be interested to know that we have been making our
            products fairly and responsibly since the jump.
          </p>
          <p>
            What does this mean? It means that all of our shoes are made by
            top-rated factories that meet the highest standards of labor and
            environmental practices.{' '}
          </p>
          <p>
            We know that it’s impossible to make physical goods and be 100%
            sustainable, but we are always taking meaningful steps towards
            decreasing our carbon footprint.{' '}
          </p>
        </div>
        <div>
          <p>We are inspired by the no BS attitude of iconic retro sneakers.</p>
          <p>
            We design them to be trend-resistant, and super easy to dress up or
            down. They are going to play nice with anything you already own, and
            they’re going to take you where you need to go. But that’s only one
            half of the story.{' '}
          </p>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 4rem 0;

  .title {
    margin-top: 2rem;
    h5 {
      color: #9bce0a;
      line-height: 0.8;
      font-size: clamp(0.8rem, 2vw, 1rem);
    }
    h2 {
      text-transform: uppercase;
      font-size: clamp(2rem, 5vw, 2.8rem);
      line-height: 1.4;
    }
    h6 {
      margin-top: 0.5rem;
      font-size: clamp(0.8rem, 2vw, 1rem);
    }
  }

  .img-about {
    width: 100%;
    object-fit: cover;
  }
  .text-container {
    margin-top: 1rem;
    p {
      font-size: clamp(0.85rem, 2vw, 1rem);
      line-height: 1.8;
      font-family: 'Sora', sans-serif;
    }
  }

  @media (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      grid-column-gap: 3rem;
      padding: 6rem 0 0 0;
    }

    .img-about {
      max-width: 500px;
      height: 500px;
    }
    .text-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      margin-top: 3rem;
    }
  }
`

export default Article
