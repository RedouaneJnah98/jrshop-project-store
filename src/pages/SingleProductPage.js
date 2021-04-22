import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { formatPrice } from '../utils/helpers'
import { Loading, Error, ProductImages, AddToCart, Stars } from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const url = '/api/products?id='

const SingleProductPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  const {
    name,
    price,
    collection,
    stars,
    size,
    stock,
    reviews,
    images,
    desc,
    colors,
  } = product

  return (
    <Wrapper className="section-center">
      <div className="product-container">
        <ProductImages images={images} />
        <section className="infos">
          <div className="info-product">
            <h4>{name}</h4>
            <p className="price">{formatPrice(price)}</p>
          </div>
          <p className="desc">{desc}</p>
          <div>
            <button type="button" className="white-bcg">
              {collection}
            </button>
            <button type="button" className="black-bcg">
              PYCA PRO
            </button>
          </div>
          <h5>
            available : <span>{stock > 0 ? 'InStock' : 'Out Of Stock'}</span>{' '}
          </h5>
          {stock > 0 && <AddToCart product={product} />}
          <Stars stars={stars} reviews={reviews} />
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding: 3rem 0;

  .product-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .infos {
    width: 500px;

    h5 {
      font-size: 1rem;
      font-weight: 400;
      margin: 1rem 0;
      text-transform: capitalize;
    }
  }
  .info-product {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 1.25rem;
      font-weight: 500;
    }

    .price {
      font-size: 1.1rem;
      color: var(--second-clr);
    }
  }

  .desc {
    font-weight: 300;
    margin: 1rem 0;
    word-wrap: break-word;
    width: 400px;
  }

  button {
    border-color: transparent;
    padding: 0.35rem 0.8rem;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    border: 1px solid var(--main-clr);
    background: var(--white-clr);
  }
  .black-bcg {
    background: var(--main-clr);
    color: var(--white-clr);
    margin-left: 0.8rem;
  }
`

export default SingleProductPage
