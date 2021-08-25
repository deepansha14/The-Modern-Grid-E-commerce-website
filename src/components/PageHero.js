import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #FFDEDE;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: #986D8E;
  a {
    color: #464660;
    padding: 0.5rem;
    transition: 0.3s linear;
  }
  a:hover {
    color:#464660 ;
  }
`

export default PageHero