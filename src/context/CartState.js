import React, { useReducer } from 'react'
import CartContext from './cartContext'
import CartReducer from './cartReducer'
import { storeProducts, detailProduct } from '../data'
import { HANDLE_DETAIL, ADD_TO_CART } from '../type'

const CartState = props => {
  const initialState = {
    products: storeProducts, // sets the initial state for products
    detailProduct: detailProduct
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)
  const handleDetail = () => {
    console.log('hello from detail')
    dispatch({
      type: HANDLE_DETAIL,
      payload: state.action
    })
  }
  const addToCart = () => {
    console.log('hello from add to cart')
    dispatch({
      type: ADD_TO_CART,
      payload: state.action
    })
  }

  return (
    <CartContext.Provider value={{ ...initialState, addToCart, handleDetail }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
