import React, { useContext } from 'react'
import CartContext from '../context/cartContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Details = () => {
  //useCartContext.Consumer to consume the values that are being provided by context
  return (
    <CartContext.Consumer>
      {value => {
        const {
          id,
          title,
          img,
          price,
          info,
          inCart,
          company
        } = value.detailProduct
        return (
          <div className='container py-5'>
            {/*title*/}
            <div className='row'>
              <div className='col-10 mx-auto text-center text-blue my-5'>
                <h1>{title}</h1>
              </div>
            </div>
            {/*end title*/}
            {/*start Product infot*/}
            <div className='row'>
              <div className='col-10 mx-auto col-md-6 my-6 text-capitalize'>
                <img src={img} className='img-fluid' alt='product' />
              </div>
              {/*start Product text*/}
              <div className='col-10 mx-auto col-md-6 my-6 text-capitalize'>
                <h2>model:{title}</h2>
                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                  {company}
                </h4>
                <h4>
                  <strong>
                    price: <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                  some info on the product
                </p>
                <p className='text-muted lead'>{info}</p>
                <div>
                  <Link to='/'>
                    <Button>Back To product</Button>
                  </Link>

                  <Button
                    disable={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id) //onClick use the addToCart function
                    }}
                    className='m-2 alert-info'
                  >
                    {inCart ? 'inCart' : 'add To Cart'}
                  </Button>
                </div>
              </div>
              {/*end Product text*/}
            </div>
            {/*end Product info*/}
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default Details
