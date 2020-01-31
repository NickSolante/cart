import React, { useReducer, useState, useEffect } from 'react'
import CartContext from './cartContext'
import CartReducer from './cartReducer'
import { storeProducts, detailProduct } from '../data'
import { HANDLE_DETAIL, ADD_TO_CART } from '../type'

const CartState = props => {
  const initialState = {
    detailProduct: detailProduct,
    products: [],
    cart: []
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)
  const [products, setProducts] = useState([])

  //When rather than using component did mount
  //use "useEffect hook to immitate didmount"
  useEffect(() => {
    let tempProducts = []
    storeProducts.forEach(item => {
      const singleItem = { ...item }
      tempProducts = [...tempProducts, singleItem]
    })
    setProducts(tempProducts)
  }, [])

  const handleDetail = id => {
    const product = getItem(id)
    console.log(product)
    dispatch({
      type: HANDLE_DETAIL,
      payload: product
    })
  }
  const getItem = id => {
    const product = products.find(item => item.id === id) // return the item with the same data
    console.log('coming from detail products in getItem')
    console.log(products)
    return product
  }

  const addToCart = id => {
    let tempProducts = [...products]
    const index = tempProducts.indexOf(getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
    console.log(`hello from add to cart ${id}`)
    dispatch({
      type: ADD_TO_CART,
      payload: { tempProducts, product, price }
    })
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        handleDetail,
        detailProduct: state.detailProduct
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
