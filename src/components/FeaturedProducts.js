import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// Importing the context
import { useProductsContext } from '../context/products_context'

// Importing the components
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
    <Wrapper className='section'>
      <div className='title'>
        <h2>AS BEATIFUL AS YOUR BOND</h2>
        <h4>Shop Our Latest Collections</h4>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #F1E9E5;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  h2{
    letter-spacing: 0.2rem
  }
  h4{
    margin-top: 1rem;
  }

  .btn {
    display: block;
    padding: 0.9rem 0.25rem;
    height: 50px;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    background: white;
    color: #40394A;
    font-weight: 600;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts