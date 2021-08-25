import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter to stay updated!</h3>
        <div className='content'>
          <p>
            SignUp to unlock the best deals. We are here to add life to your home with our very own experts and designers.
            So what are you waiting for? Come join us to unlock the exclusive offers made only for you.
          </p>
          <form
            className='newsletter-form'
            action='your form spree id'
            method='POST'
          >
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
              name='_replyto'
            />
            <button type='submit' className='submit-btn'>
              subscribe now
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: #F1E9E5;
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: #464660;
    font-weight: 600;
  }
  .newsletter-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px dashed #464660;
  }
  .form-input {
    border-right: none;
    color: #464660;
  }
  .form-input::placeholder {
    color: black;
    text-transform: capitalize;
  }
  .submit-btn {
    background: #F6A9A9;
    text-transform: capitalize;
    letter-spacing: 0.25rem;
    cursor: pointer;
    transition: 0.3s;
    color: black;
  }
  .submit-btn:hover {
    color: white;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact