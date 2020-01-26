import React, { Fragment, useState, useContext } from 'react'
import Title from '../layouts/Title'
import { storeProducts } from '../data'
import CartContext from '../context/cartContext'

const ProductList = props => {
  console.log(props)
  const cartContext = useContext(CartContext)

  const { products } = cartContext

  const hello = Object.entries(products)
  console.log('here are the products', products)
  return (
    <Fragment>
      <div className='px-5 '>
        <div className='container'>
          <Title name='Our' title='Products' />
        </div>
      </div>
    </Fragment>
  )
}

export default ProductList
