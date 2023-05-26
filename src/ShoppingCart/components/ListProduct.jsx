import React from 'react'
import SingleProduct from './SingleProduct'
import { CartContextState } from '../Contexts/CartContextProvider'

function ListProduct() {

  const { state: { products }, productState: {sort, byStock, byFastDelivery, byRating,searchQuery}} = CartContextState()

  const transformProducts = () => {
    let sortedProducts = products;
    // Sort By Ascending or Descending Order
    if(sort){
      sortedProducts = sortedProducts.sort((a, b) => 
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price)
    }
    // Sort By Stock
    if(!byStock){
      sortedProducts = sortedProducts.filter((product) => product.inStock)
    }
    //  Sort By Fast Delivery
    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((product) => product.fastDelivery)
    }
    // Sort by Rating
    if(byRating){
      sortedProducts = sortedProducts.filter((product) => product.ratings >= byRating)
    }
    // Search by NAME
    if(searchQuery){
      sortedProducts = sortedProducts.filter((product) => product.name.toLowerCase().includes(searchQuery))
    }
    return sortedProducts;
  }

  return (
    <>
    <section className='basis-[75%] text-black py-4'>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8'>
        {transformProducts().map((product) => (
            <SingleProduct key={product.id} product={product} /> ))}
      </div>
    </section>
    </>
  )
}

export default ListProduct