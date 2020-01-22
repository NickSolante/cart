import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <ProductList />
    </div>
  )
}

export default App
