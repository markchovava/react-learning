import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker'
import ProductData from './../data/ProductsData.json'
import { cartReducer, productReducer } from '../Reducers/Reducers'


export const CartContext = createContext()


function CartContextProvider({ children }) {
  
  const products = ProductData
  const initialState = { products: products, cart: [] }
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const productInitialState = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ''
  }
  const [productState, productDispatch] = useReducer(productReducer, productInitialState)
 

  return (
    <CartContext.Provider value={{ 
        state, 
        dispatch, 
        productState, 
        productDispatch }}>
    { children }
    </CartContext.Provider>
  )
}

export const CartContextState = () => {
  return useContext(CartContext)
}

export default CartContextProvider

