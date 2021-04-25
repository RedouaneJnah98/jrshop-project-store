import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    filters: {
      text,
      collections,
      size,
      color,
      max_price,
      min_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

  const brands = getUniqueValues(all_products, 'collection')
  const sizes = getUniqueValues(all_products, 'sizes')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div>
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of input search */}
          {/* collections */}
          <div className="form-control">
            <h5>collections</h5>
            {brands.map((collection, index) => {
              return (
                <button
                  type="button"
                  onClick={updateFilters}
                  key={index}
                  name="collections"
                  className={`${
                    collections === collection.toLowerCase() ? 'active' : null
                  }`}
                >
                  {collection}
                </button>
              )
            })}
          </div>
          {/* end of collections */}
          {/* sizes */}
          <div className="form-control">
            <h5>sizes</h5>
            {/* <select name="sizes">
              {size.map((s, index) => {
                return (
                  <option key={index} value={s}>
                    {s}
                  </option>
                )
              })}
            </select> */}
            <div className="btn-container">
              {sizes.map((s, index) => {
                return (
                  <button
                    onClick={updateFilters}
                    name="size"
                    type="button"
                    className={`${
                      size === s.toLowerCase()
                        ? 'active-btn-size size-btn'
                        : 'size-btn'
                    }`}
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of sizes */}
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-top: 1.5rem;
  }

  .size-btn {
    display: inline-block;
    border: 1px solid #e5e9ee;
    width: clamp(2.5rem, 2vw, 3rem);
    height: clamp(2.5rem, 2vw, 3rem);
    font-size: clamp(0.85rem, 2vw, 0.9rem);
    font-weight: 400;
  }

  .active-btn-size {
    transition: 0.2s all ease-in;
    background: var(--main-clr);
    color: var(--white-clr);
  }

  .search-input {
    background: var(--second-clr-3);
    padding: 0.5rem;
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    outline-color: var(--second-clr);

    &::placeholder {
      text-transform: capitalize;
    }
  }

  h5 {
    color: var(--second-clr);
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25rem 0;
    padding: 0.25rem 0;
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    outline: none;
  }

  .active {
    transition: 0.4s all linear;
    border-bottom: 2px solid var(--second-clr);
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
