import React, { Fragment } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layouts/Navbar'
import ProductList from './components/ProductList'
import NotFound from './components/NotFound'
import Details from './components/Details'
import Cart from './components/Cart'
import CartState from './context/CartState'
import Modal from './components/Modal'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <CartState>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={ProductList}></Route>
            <Route path='/products/' component={ProductList}></Route>
            <Route path='/details/' component={Details}></Route>
            <Route path='/cart/' component={Cart}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          <Modal />
        </Fragment>
      </Router>
    </CartState>
  )
}

export default App
