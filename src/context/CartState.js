import React, { useReducer, useState, useEffect } from 'react'
import CartContext from './cartContext'
import CartReducer from './cartReducer'
import { storeProducts, detailProduct } from '../data'

const CartState = props => {
  const initialState = {
    cart: []
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)
  const [products, setProducts] = useState([])
  const [detailProducts, setDetailProducts] = useState(detailProduct)
  const [cart, setCart] = useState([])
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
    setDetailProducts(product)
  }
  const getItem = id => {
    const tempProd = products.find(item => item.id === id)
    return tempProd
  }

  const addToCart = id => {
    let tempProducts = [...products]
    const index = tempProducts.indexOf(getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
    let newCart = [...cart, product]
    setCart(newCart)
    cart.forEach(item => {
      console.log(item)
    })
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        handleDetail,
        detailProducts
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
export default CartState
