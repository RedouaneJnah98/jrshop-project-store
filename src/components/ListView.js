import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        console.log(product)
        const { id, name, desc, price, url } = product

        return (
          <article key={id}>
            <img src={url} alt={name} className="product-img" />
            <div>
              <h4>{name}</h4>
              <p className="price">{formatPrice(price)}</p>
              <p className="desc">{desc.substring(0, 130)}...</p>
              <Link to={`/products/${id}`} className="link">
                details
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
  }

  .price {
    color: var(--second-clr);
    margin: 0.5rem 0;
    font-size: clamp(0.9rem, 2vw, 1rem);
  }

  .desc {
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    font-weight: 400;
    margin-bottom: 0.65rem;
  }

  h4 {
    margin-top: 1.5rem;
    font-size: clamp(0.85rem, 2vw, 1.1rem);
    text-transform: uppercase;
    font-weight: 500;
  }

  .link {
    text-transform: uppercase;
    font-size: 0.55rem;
    font-weight: 400;
    background: var(--main-clr);
    color: var(--white-clr);
    padding: 0.35rem 0.6rem;
    letter-spacing: 2px;

    &:hover {
      transition: 0.3s;
      opacity: 0.8;
    }
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;

      h4 {
        margin-top: 0;
      }
    }
  }
`

export default ListView
