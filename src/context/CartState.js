import React, { useReducer } from 'react'
import CartContext from './cartContext'
import CartReducer from './cartReducer'
import { storeProducts, detailProduct } from '../data'

const CartState = props => {
  const initialState = {
    products: storeProducts, // sets the initial state for products
    detailProduct: detailProduct
  }
  const [state, dispatch] = useReducer(CartReducer, initialState)

  return (
    <CartContext.Provider value={{ ...initialState }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
