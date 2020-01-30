import React, { Fragment } from 'react'
import Title from '../layouts/Title'
import CartContext from '../context/cartContext'
import Product from './Product'

const ProductList = props => {
  return (
    <Fragment>
      <div className='py-5 '>
        <div className='container'>
          <Title name='Our' title='Products' />
          <div className='row'>
            <CartContext.Consumer>
              {context => {
                console.log(context)
                return context.products.map(product => {
                  return <Product key={product.id} product={product} />
                })
              }}
            </CartContext.Consumer>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductList
