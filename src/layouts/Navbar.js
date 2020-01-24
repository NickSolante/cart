/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { Button } from 'react-bootstrap'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
      <Link to='/'>
        <img src={logo} alt='store' className='navbar-brand' />
      </Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-items ml-5'>
          <Link to='/products' className='nav-link'>
            Products
          </Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <Button variant='secondary'>
          <i className='fas fa-cart-plus' />
          My Cart
        </Button>
      </Link>
    </nav>
  )
}

export default Navbar
