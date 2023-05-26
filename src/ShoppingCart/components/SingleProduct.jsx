import React from 'react'
import Rating from './Rating'
import { CartContextState } from '../Contexts/CartContextProvider'

function SingleProduct({ product }) {
  const {state: {cart}, dispatch } = CartContextState()

  return (
    <>
        <section className='shadow-lg bg-white shadow-1 p-5 rounded-lg w-full cursor-pointer hover:shadow-2xl transition'>
          <div className='text-sm font-semibold w-full'>
            {product.name}
          </div>
          {product.fastDelivery ? (
            <div className='text-sm text-blue-700'> Fast Delivery </div>
          ) : (
            <div className='text-sm text-green-700'> 4 Days Delivery </div>
          )}
          <Rating 
            style="text-sm text-gray-500 my-1"
            rating={product.ratings} />
          <div className='font-semibold text-xl mb-2'>
            ${product.price.split(".")[0]}
          </div>
          <div className=''>
            { cart.some(p => p.id === product.id) ? (
              <button 
                onClick={() => ( dispatch({type: 'REMOVE_FROM_CART', payload: product }))}
                className='text-sm rounded-lg text-white bg-red-500 hover:bg-red-600 py-1 px-2'>
                Remove from Cart
              </button>
            ) : (
              <button 
                onClick={() => ( dispatch({type: 'ADD_TO_CART', payload: product }))}
                disabled={!product.inStock}
                className={`${!product.inStock ? 'bg-gray-500 cursor-pointer' : 'bg-blue-500 hover:bg-blue-600'} text-sm rounded-lg text-white py-1 px-2`}>
                {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
              </button>
            ) }
           
        
          </div>
          
      
        </section>
    </>
  )
}

export default SingleProduct