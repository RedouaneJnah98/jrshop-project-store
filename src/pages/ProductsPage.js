import React from 'react'
import { Filters, ProductList, Sort, PageHero } from '../components'
import styled from 'styled-components'
import bcgImage from '../assets/backgrounds/product-bcg-2.jpg'

const ProductsPage = () => {
  return (
    <main>
      <PageHero
        title="all products"
        subtitle="50% OFF of our products"
        image={bcgImage}
      />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    grid-gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
      grid-gap: 3rem;
    }
  }
`

export default ProductsPage
