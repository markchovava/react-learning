import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import CartPage from './CartPage'
import CartContextProvider from './Contexts/CartContextProvider'

function CartApp() {
  return (
    <CartContextProvider>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    </CartContextProvider>
  )
}

export default CartApp