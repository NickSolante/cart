import React, { Fragment } from 'react'
import Title from '../layouts/Title'
import CartContext from '../context/cartContext'
import Product from './Product'

const ProductList = props => {
  return (
    <Fragment>
      <div className='px-5 '>
        <div className='container'>
          <Title name='Our' title='Products' />
          <CartContext.Consumer>
            {context => {
              return context.products.map(product => {
                return <Product key={product.id} product={product} />
              })
            }}
          </CartContext.Consumer>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductList
