import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Hero'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h2>featured products</h2>
          <ProductsBtn type="button">all products</ProductsBtn>
        </div>
        <div className="featured">
          {featured.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;

  .featured {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 2rem 0;
    margin-top: 2rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      text-transform: capitalize;
      font-size: clamp(1.3rem, 5vw, 1.875rem);
    }
  }
`

const ProductsBtn = styled.button`
  background: var(--main-clr);
  color: var(--white-clr);
  text-transform: uppercase;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  width: clamp(155px, 20vw, 180px);
  height: clamp(45px, 10vw, 55px);
  outline: none;
  border-color: transparent;

  &:hover {
    transition: 0.4s all linear;
    border: 1px solid var(--main-clr);
    background: var(--white-clr);
    color: var(--main-clr);
  }
`

export default FeaturedProducts
