import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            we take our customers’ needs very seriously.
            A team of furniture designers work tirelessly to craft fresh new furniture designs that cater to the requirements of today’s homeowner flawlessly.
            We take design aesthetics equally seriously which is why we have furniture options available in different aesthetics including classic, modern, mid-century, boho chic, Scandanavian, industrial, and many more.
            Buy high-quality furniture for your home without worrying about overspending since our prices can be best described as reasonable. If you’re setting up a home office, you can find the perfect option in our range of study tables. Need a coffee table for your living room? The Modern Grid has got you covered
          </p>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article key={id} className='service'>
                <span className='icon'>{icon} </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: black;
  }
  padding: 5rem 0;
  background: white;
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: black;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: #EFB7B7;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 0.25rem;
    transition: 0.3s linear;
    p {
      color: black;
    }
    
  }

  .service:hover{  
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 10px 40px 0 rgba(0, 0, 0, 0.26); 
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: #F1E9E5;
    color: #082032;
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services