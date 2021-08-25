import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'

// extra imports
import { useBagContext } from '../context/Bag_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    const { Bag } = useBagContext()
    return (
        <main>
            <PageHero title='checkout' />
            <Wrapper className='page'>
                {Bag.length < 1 ? (
                    <div className='empty'>
                        <h2>your Bag is empty</h2>
                        <Link to='/products' className='btn'>
                            fill it
                        </Link>
                    </div>
                ) : (
                    <StripeCheckout />
                )}
            </Wrapper>
        </main>
    )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`
export default CheckoutPage