import React, { Fragment } from 'react'
import CartContext from '../context/cartContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//to destructure a prop that is being passed from the parent component
const Product = ({ product: { id, title, img, price, inCart } }) => {
  return (
    <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
      <div className='card'>
        <div
          className='img-container p-5'
          onClick={() => console.log('you clicked on the image container')}
        >
          <Link to='/details'>
            <img src={img} alt='produvc' className='card-img-top' />
          </Link>
          <button
            className='cart-btn'
            disabled={inCart ? true : false}
            onClick={() => {
              console.log('added to the cart')
            }}
          >
            {inCart ? (
              <p className='text-Capitalized mb-bottom-0' disabled>
                in cart
              </p>
            ) : (
              <i className='fas fa-cart-plus' />
            )}
          </button>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <p className='align-self-center mb-0'>{title}</p>
          <h5 className='text-blue font-italic mb-0'>
            <span className='mr-1'>$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  )
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
`
export default Product
