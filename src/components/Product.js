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
      </div>
    </ProductWrapper>
  )
}
const ProductWrapper = styled.div``
export default Product
