import React from 'react'
import styled from 'styled-components'

// Importing helper-functions from utils
import { formatPrice } from '../utils/helpers'

// Importing the components
import IncDecButtons from './IncDecButtons'

// Importing the icons
import { FaTrash } from 'react-icons/fa'

// Importing the context
import { useBagContext } from '../context/Bag_context'

const BagItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, changeAmount } = useBagContext()

  const inc_amount = () => {
    changeAmount(id, 'inc')
  }

  const dec_amount = () => {
    changeAmount(id, 'dec')
  }
  return (
    <Wrapper>
      <div className='title_sec'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <IncDecButtons className="btns" amount={amount} inc_amount={inc_amount} dec_amount={dec_amount} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  .title_sec {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 0.25rem;
    object-fit: cover;
  }

  display: grid;
  grid-template-columns: 180px auto auto;
  grid-template-rows: 75px;
  gap: 2.5rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }
  .color {
    color: black;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-left: 0.5rem;
      border-radius: 0.25rem;
    }
  }
  .price-small {
    color: black;
    font-weight: 700;
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color:black;
    background: transparent;
    border: transparent;
    letter-spacing: 0.1rem;
    background: #F6A9A9;
    width: 1.7rem;
    height: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.2rem;
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: black;
      font-weight: 600;
      font-size: 1rem;
    }
    .price-small {
      display: none;
      font-weight: 700;
    }
    .price {
      display: block;
      font-size: 1rem;
      font-weight: 700;
      color: black;
    }
    .name {
      font-size: 0.85rem;
      font-weight: 700;
    }
    .color {
      font-size: 0.85rem;
      font-weight: 700;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title_sec {
      height: 100%;
      display: grid;
      font-weight: 700;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default BagItem