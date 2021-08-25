import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Importing the context
import { useBagContext } from '../context/Bag_context'
import { useUserContext } from '../context/user_context'

// Importing the helper functions
import { formatPrice } from '../utils/helpers'

const BagTotals = () => {
  const { total_amount, shipping_fee } = useBagContext()
  const { myUser, loginWithRedirect } = useUserContext()

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping Charges : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Total Amount :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            Continue to checkout
          </Link>
        ) : (
          <button type='button' className='btn' onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px dashed grey;
    border-radius: 0.25rem;
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    
  }
  p {
    text-transform: capitalize;
    font-weight: 600;
  }
  h4 {
    margin-top: 2rem;
    font-size: 1.2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    background: #F6A9A9;
    color: black;
  }
`

export default BagTotals