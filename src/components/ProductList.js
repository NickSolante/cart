import React, { Fragment, useState } from 'react'
import Title from '../layouts/Title'
import { storeProducts } from '../data'
import { Products } from '../context/CartState'

const ProductList = props => {
  console.log(props)

  const [products, setProducts] = useState(storeProducts)

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
