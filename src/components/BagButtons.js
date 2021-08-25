import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Importing the icons
import { FaShoppingBag, FaUserMinus, FaUserPlus } from 'react-icons/fa'

// Importing the context
import { useProductsContext } from '../context/products_context'
import { useBagContext } from '../context/Bag_context'
import { useUserContext } from '../context/user_context'

const BagButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearBag } = useBagContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()

  return (
    <Wrapper className='Bag-btn-wrapper'>
      <Link to='/Bag' className='Bag-btn' onClick={closeSidebar}>
        Bag
        <span className='Bag-container'>
          <FaShoppingBag />
          <span className='bag-quantity'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='login-btn'
          onClick={() => {
            clearBag()
            localStorage.removeItem('user')
            logout({ returnTo: window.location.origin })
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type='button' className='login-btn' onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .Bag-btn {
    font-size: 1.2rem;
    letter-spacing:0.10rem;
    display: flex;
    align-items: center;
    color: #2D2424;
  }
  .Bag-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.5rem;
      margin-left: 5px;
    }
  }
  .bag-quantity {
    position: absolute;
    top: -10px;
    right: -16px;
    background: #F6A9A9;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1rem;
    color: grey;
    padding: 12px;
  }
  .login-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    color: #2D2424;
    font-size: 1rem;
    cursor: pointer;
    letter-spacing: 0.1rem;
    svg {
      margin-left: 5px;
    }
  }
`
export default BagButtons