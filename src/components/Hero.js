import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Importing assests
import heroBcg from '../assets/main.jpg'
import heroBcg2 from '../assets/carp.jpg'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Designs inspired <br />
          by the new generation with a classic touch
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure
          quasi odit tenetur unde officiis repudiandae quod deserunt quia eum?
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice table' className='main-img' />
        <img src={heroBcg2} alt='person working' className='small-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  h1{
    line-height: 1.5;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    font-weight: 550;
    color:black;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 13rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      color: black;
      background: #F6A9A9;
    }

    .hero-btn:hover{
      background: #2C2E43;
      color: #F6A9A9;
      transition: 0.4s;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 500px;
      position: relative;
      border-radius: 0.30rem;
      display: block;
      object-fit: cover;
    }
    .small-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: 0.3rem;
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: #F1E9E5;
      bottom: 0%;
      left: -10%;
      border-radius: 0.3rem;
    }
  }
`

export default Hero