import React from 'react'
import { Filters, ProductList, Sort, PageHero } from '../components'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import Loading from '../components/Loading'

const ProductsPage = () => {
  const { filtered_products: products } = useFilterContext()

  if (products.length < 1) {
    return <Loading />
  }

  return (
    <>
      <main>
        <PageHero />
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
    </>
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
    }
  }
`

export default ProductsPage
