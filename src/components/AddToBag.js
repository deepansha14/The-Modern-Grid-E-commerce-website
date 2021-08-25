import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Importing the icons
import { FaCheck } from 'react-icons/fa'

// Importing the context
import { useBagContext } from '../context/Bag_context'

// Importing the components
import IncDecButtons from './IncDecButtons'

const AddToBag = ({ product }) => {
    const { addToBag } = useBagContext()
    const { id, stock, colors } = product

    const [centralColor, setcentralColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)

    const inc_amount = () => {
        setAmount((currAmount) => {
            let tempAmount = currAmount + 1
            if (tempAmount > stock) {
                tempAmount = stock
            }
            return tempAmount
        })
    }
    const dec_amount = () => {
        setAmount((currAmount) => {
            let tempAmount = currAmount - 1
            if (tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount
        })
    }

    return (
        <Wrapper>
            <div className='colors'>
                <span> colors : </span>
                <div>
                    {colors.map((color, index) => {
                        return (
                            <button key={index} style={{ background: color }} className={`${centralColor === color ? 'color-picker active-state' : 'color-picker'}`}
                                onClick={() => setcentralColor(color)}
                            >
                                {centralColor === color ? <FaCheck /> : null}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className='btn-container'>
                <IncDecButtons
                    amount={amount}
                    inc_amount={inc_amount}
                    dec_amount={dec_amount}
                />
                <Link
                    to='/Bag'
                    className='btn'
                    onClick={() => addToBag(id, centralColor, amount, product)}
                >
                    add to Bag
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .btn {
    margin-top: 1rem;
    width: 140px;
    }
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 500;
    }
    div {
      display: flex;
    }
  }
  .color-picker {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 40%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: white;
    }
  }

  .active-state {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  
`
export default AddToBag
