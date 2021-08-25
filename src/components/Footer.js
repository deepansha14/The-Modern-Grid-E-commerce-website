import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> The Modern Grid</span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  text-align: center;
  span {
    color: #F6A9A9;
  }
  h5 {
    color: white;
    margin: 0.2rem;
    font-weight: 600;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 800px) {
    flex-direction: row;
  }
`

export default Footer