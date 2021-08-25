import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Importing the helper function
import { formatPrice } from '../utils/helpers'

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>)
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.3rem;
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: #2C2E43;
    margin-bottom: 0.75rem;
  }
  p {
    color: #536162;
    max-width: 45em;
    margin-bottom: 1rem;
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
  }
  .btn {
    font-size: 0.785rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView