import React, { useReducer, useState, useEffect } from 'react'
import CartContext from './cartContext'
import CartReducer from './cartReducer'
import { storeProducts, detailProduct } from '../data'
import { HANDLE_DETAIL, ADD_TO_CART, USE_EFFECT } from '../type'

const CartState = props => {
  const initialState = {
<<<<<<< HEAD
<<<<<<< HEAD
    detailProduct: detailProduct,
    products: [],
    cart: []
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)

=======
    detailProduct: detailProduct
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)
  const [products, setProducts] = useState([])
>>>>>>> parent of bdfed67... cart state update
=======
    detailProduct: detailProduct
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)
  const [products, setProducts] = useState([])
>>>>>>> parent of bdfed67... cart state update
  //When rather than using component did mount
  //use "useEffect hook to immitate didmount"
  useEffect(() => {
    let tempProducts = []
    storeProducts.forEach(item => {
      const singleItem = { ...item }
      tempProducts = [...tempProducts, singleItem]
    })
    dispatch({
      type: USE_EFFECT,
      payload: tempProducts
    })
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
    const product = { ...this.state.products } // return the item with the same data
    const tempProd = product.find(item => item.id === id)
    console.log('coming from detail products in getItem')
    console.log(tempProd)
    return tempProd
  }

  const addToCart = id => {
<<<<<<< HEAD
<<<<<<< HEAD
    let tempProducts = [...this.state.products]
    const index = tempProducts.indexOf(getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
=======
=======
>>>>>>> parent of bdfed67... cart state update
    console.log(`hello from add to cart ${id}`)
>>>>>>> parent of bdfed67... cart state update
    dispatch({
      type: ADD_TO_CART,
      payload: { tempProducts, product, price }
    })
  }

  return (
    <CartContext.Provider
      value={{
        products: state.products,
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
