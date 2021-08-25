import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Importing the images
import logo from '../assets/logo1.jpg'

// Importing the icons
import { FaBars } from 'react-icons/fa'

// Importing the constants 
import { links } from '../utils/constants'

// Importing the components
import BagButtons from './BagButtons'

// Importing the context
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='comfy sloth' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul>
        <BagButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 750px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #F6A9A9;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .Bag-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: gray;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid #E2BCB7;
        }
      }
    }
    .Bag-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav