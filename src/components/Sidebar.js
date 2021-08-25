import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Importing the images
import logo from '../assets/logo1.jpg'

// Importing the context
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

// Importing the icons
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'

// Importing the components
import BagButtons from './BagButtons'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  const { myUser } = useUserContext()

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='comfy sloth' />
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <BagButtons />
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: #EFB7B7;
    transition: 0.3s linear;
    cursor: pointer;
    color: #BD4B4B;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: #FF4C29;
  }
  .logo {
    justify-self: center;
    height: 85px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: grey;
    transition: 0.3s linear;
    letter-spacing: 0.1rem;
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background:#082032 ;
    color: white;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .Bag-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar