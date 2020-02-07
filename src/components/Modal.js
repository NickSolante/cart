import React from 'react'
import styled from 'styled-components'
import CartContext from '../context/cartContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Modal() {
  return (
    <CartContext.Consumer>
      {value => {
        const { modalOpen, closeModal } = value
        const { img, title, price } = value.modalProduct
        if (!modalOpen) {
          return null
        } else {
          return (
            <ModalContainer>
              <div className='container'>
                <div className='row'>
                  <div className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                    <h5>Item added to the cart</h5>
                  </div>
                </div>
              </div>
            </ModalContainer>
          )
        }
      }}
    </CartContext.Consumer>
  )
}

export default Modal

const ModalContainer = styled.div``
