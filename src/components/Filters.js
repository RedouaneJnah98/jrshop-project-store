import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { GoCheck } from 'react-icons/go'

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
          {/* colors */}
          <div className="form-control">
            <h5>color</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      onClick={updateFilters}
                      name="color"
                      data-color="all"
                      className={`${
                        color === 'all' ? 'active-btn-size all-btn' : 'all-btn'
                      }`}
                    >
                      all
                    </button>
                  )
                }
                return (
                  <button
                    type="button"
                    name="color"
                    onClick={updateFilters}
                    key={index}
                    style={{ background: c }}
                    className={`${
                      color === c ? 'active-clr color-btn' : 'color-btn'
                    }`}
                    data-color={c}
                  >
                    {color === c ? <GoCheck /> : null}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className="form-control">
            <h5>shipping</h5>
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button type="button" onClick={clearFilters} className="clear-btn">
          clear filters
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-top: 1.5rem;
  }

  /* size */
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

  /* color */
  .colors {
    display: flex;
    flex-wrap: wrap;
  }

  .color-btn {
    display: inline-block;
    border: 1px solid #e5e9ee;
    width: clamp(2.5rem, 2vw, 3rem);
    height: clamp(2.5rem, 2vw, 3rem);
    opacity: 0.6;
    position: relative;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--white-clr);
    }
  }
  .active-clr {
    opacity: 1;
    border-color: var(--main-clr);
  }

  .all-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(2.5rem, 2vw, 3rem);
    height: clamp(2.5rem, 2vw, 3rem);
    font-weight: 400;
  }
  /* end of color */

  label {
    text-transform: capitalize;
    margin-right: 1rem;
  }

  label,
  p {
    font-size: clamp(0.9rem, 2vw, 1rem);
    font-weight: 300;
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

  .clear-btn {
    background: #fb3e3e;
    padding: 0.6rem 1.5rem;
    color: var(--white-clr);
    cursor: pointer;
    margin-top: 1.5rem;
    font-weight: 500;

    &:hover {
      transition: 0.3s all linear;
      background: #f40000;
    }
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
