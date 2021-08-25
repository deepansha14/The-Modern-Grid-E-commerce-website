import React from 'react'
import styled from 'styled-components'
import { useBagContext } from '../context/Bag_context'
import { Link } from 'react-router-dom'
import { BagContent, PageHero } from '../components'

const BagPage = () => {
    const { Bag } = useBagContext()
    if (Bag.length < 1) {
        return (
            <Wrapper className='page-100'>
                <div className='empty'>
                    <h2>Your Bag is empty</h2>
                    <Link to='/products' className='btn'>
                        fill it
                    </Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <main>
            <PageHero title='Bag' />
            <Wrapper className='page'>
                <BagContent />
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default BagPage