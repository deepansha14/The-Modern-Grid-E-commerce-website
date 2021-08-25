import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: black;
    border-radius: 0.25rem;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 0.25rem;
    transition: 0.3rem linear;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:#F6A9A9 ;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: 0.3s linear;
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: white;
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
  }
  footer h5,
  footer p {
    color: grey;
    margin-bottom: 0;
    font-weight: 600;
  }
  footer p {
    color: grey;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
`
export default Product