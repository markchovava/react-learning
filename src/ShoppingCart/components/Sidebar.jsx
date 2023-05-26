import React, { useState } from 'react'
import Rating from './Rating'
import { CartContextState } from '../Contexts/CartContextProvider'

function Sidebar() {
  const [rating, setRating] = useState(0)

  const { productState: { byStock, byFastDelivery, sort, byRating, searchQuery }, productDispatch } = CartContextState()
  console.log(byStock, byFastDelivery, sort, byRating, searchQuery)

  return (
    <section className='sticky bg-blue-950 text-white basis-[25%] lg:h-[90vh] h-auto'>
        <div className='w-full pt-5 pl-4 pr-3'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Filters</h2>
            <label className='py-2 mb-2 block cursor-pointer hover:text-yellow-200'>
              <input type='radio' className='mr-2' 
                onChange={() => productDispatch({ type: 'SORT_BY_PRICE', payload: 'lowToHigh'})}
                checked={sort === 'lowToHigh' ? true : false}
                name='ordering' value='Ascending' /> 
                Ascending
            </label>
            <label className='py-2 mb-2 block cursor-pointer hover:text-yellow-200'>
              <input type='radio' className='mr-2' name='ordering' value='Descending'
                onChange={() => productDispatch({ type: 'SORT_BY_PRICE', payload: 'highToLow'})}
                checked={sort === 'highToLow' ? true : false} /> 
                Descending
            </label>
            <label className='py-2 mb-2 block cursor-pointer hover:text-yellow-200'>
              <input type='checkbox' 
                onChange={() => productDispatch({type: 'FILTER_BY_STOCK'})}
                checked={byStock}
                className='mr-2' /> Include Out of Stock
            </label>
            <label className='py-2 mb-2 block cursor-pointer hover:text-yellow-200'>
              <input type='checkbox' 
                onChange={() => productDispatch({type: 'FILTER_BY_DELIVERY'})}
                checked={byFastDelivery}
                className='mr-2' /> Fast Delivery
            </label>
            <Rating 
              rating={byRating} 
              style="text-white text-md cursor-pointer mb-2 py-2"
              onClick={(i) => productDispatch({ type: 'FILTER_BY_RATING', payload: i + 1}) } />

            <div className='mr-3 my-3'>
              <button 
                onClick={() => productDispatch({ type: 'CLEAR_FILTERS' })}
                className='w-full py-2 mr-3 my-3 block cursor-pointer text-black text-center rounded-lg bg-orange-400 hover:bg-orange-500'>Clear Filters</button>
            </div>
        </div>
    </section>
  )
}

export default Sidebar