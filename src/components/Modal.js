import React from 'react'
import styled from 'styled-components'
import CartContext from '../context/cartContext'
import { Button, Row, Col } from 'react-bootstrap'
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
                  <div
                    id='modalCon'
                    className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'
                  >
                    <h5>Item added to the cart</h5>
                    <img src={img} className='img-fluid' alt='product'></img>
                    <h5>{title}</h5>
                    <h5 className='text-muted'>Price : ${price}</h5>
                    <Row>
                      <Col>
                        <Link to='/'>
                          <Button onClick={() => closeModal()}>Store</Button>
                        </Link>
                      </Col>
                      <Col>
                        <Link to='/cart/'>
                          <Button cart onClick={() => closeModal()}>
                            Cart
                          </Button>
                        </Link>
                      </Col>
                    </Row>
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

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modalCon {
    background: white;
  }
`
