import React, { Fragment, useContext } from 'react'
import Title from '../layouts/Title'
import CartContext from '../context/cartContext'

const ProductList = props => {
  console.log(props)
  const cartContext = useContext(CartContext)

  const { products } = cartContext

  console.log('here are the products', products)
  return (
    <Fragment>
      <div className='px-5 '>
        <div className='container'>
          <Title name='Our' title='Products' />
          <cartContext.Consumer>
            {hello => {
              return <h1>{hello.title}</h1>
            }}
          </cartContext.Consumer>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductList
