import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Importing the context
import { useBagContext } from '../context/Bag_context'

// Importing the components
import BagColumnView from './BagColumnView'
import BagItem from './BagItem'
import BagTotals from './BagTotals'

const BagContent = () => {
  const { Bag, clearBag } = useBagContext()
  return (
    <Wrapper className='section section-center'>
      <BagColumnView />
      {Bag.map((item) => {
        return <BagItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-button'>
          continue shopping
        </Link>
        <button
          type='button'
          className='link-button clear-button'
          onClick={clearBag}
        >
          clear shopping Bag
        </button>
      </div>
      <BagTotals />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: #F6A9A9;
    color: black;
    border-radius: 0.25rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    cursor: pointer;
  }
  .clear-button {
    background: #2C2E43;
    color: white;
  }
`
export default BagContent