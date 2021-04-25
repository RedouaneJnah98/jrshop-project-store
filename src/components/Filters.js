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

  const collections = getUniqueValues(all_products, 'collections')
  const size = getUniqueValues(all_products, 'size')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="search"
            className="search-input"
            value={text}
            onChange={updateFilters}
          />
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
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

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
