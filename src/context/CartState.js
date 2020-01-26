import React, { useReducer } from 'react'
import CartContext from './cartContext'
import CartReducer from './cartReducer'
import { storeProducts } from '../data'

const CartState = props => {
  const initialState = {
    products: storeProducts // sets the initial state for products
  }
  const [state, dispatch] = useReducer(CartReducer, initialState)
  return (
    <CartContext.Provider value={{ product: state.products }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
