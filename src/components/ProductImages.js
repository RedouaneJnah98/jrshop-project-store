import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])

  return (
    <Wrapper>
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt="gallery products"
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
            />
          )
        })}
      </div>
      <img src={main.url} alt="product one" className="main" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 500px;
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  /* justify-content: space-between; */

  .main {
    height: 600px;
    margin-left: 1rem;
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .gallery {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 83px;
      height: 100px;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .active {
    border: 2px solid var(--main-clr);
  }

  @media (max-width: 576px) {
    flex-wrap: wrap;

    .gallery {
      margin-top: 1rem;
      flex-direction: row;
      width: 100%;
      order: 2;
      img {
        height: 50px;
        width: 60px;
      }
    }

    .main {
      margin: 0;
      height: 300px;
    }
  }
  /* @media (max-width:576px) {
    .gallery {
      img {
        width:
      }
    }
  } */
`

export default ProductImages
