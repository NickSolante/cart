import React, { useState, useEffect } from 'react'
import CartContext from './cartContext'
import CartReducer from './cartReducer'
import { storeProducts, detailProduct } from '../data'

const CartState = props => {
  const [products, setProducts] = useState([])
  const [detailProducts, setDetailProducts] = useState(detailProduct)
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  const [modalOpen, setModalOpen] = useState(true)
  const [modalProduct, setModalProduct] = useState(detailProduct)
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
    console.log(newCart)
    setCart(newCart)
  }

  const openModal = id => {
    const product = this.getItem(id)
    setModalOpen(true)
    setModalProduct(product)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        handleDetail,
        detailProducts,
        cart,
        price,
        modalOpen,
        modalProduct,
        closeModal,
        openModal
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
export default CartState
