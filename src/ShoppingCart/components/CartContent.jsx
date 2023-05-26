import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { CartContextState } from '../Contexts/CartContextProvider'

function CartContent() {
    const {state: {cart}, dispatch } = CartContextState()
    const [total, setTotal] = useState()
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => (acc + Number(curr.price)) * curr.quantity, 0))
    }, [cart])
  return (
    <section className='w-full bg-slate-100 pt-4 h-auto'>
        <div className='container mx-auto max-w-screen-xl lx:px-0 px-4'>
            <div className='flex basis[100%] justify-start gap-4 w-full h-auto'>
                <section className='basis-[75%] text-black py-4'>
                    <h1 className='font-semibold text-[3rem]'>Cart Items</h1>
                    {cart.map((product) => (
                        <div key={product.id} className='bg-white px-4 py-3 flex items-center justify-between mb-4'>
                            <div className='basis-[60%]'>
                                <div className='font-semibold text-lg'>
                                    {product.name}
                                </div>
                                <div className='font-normal text-md'>
                                    ${product.price.split(".")[0]}
                                </div>
                            </div>
                            <div className='basis-[30%]'>
                                <select 
                                    value={product.quantity} 
                                    className='bg-slate-300 w-[70%] h-auto outline-slate-500 p-2'
                                    onChange={(e) => dispatch({ type:'CHANGE_CART_QUANTITY', payload: { id:product.id, quantity: e.target.value }}) }>
                                    {[...Array(product.inStock).keys()].map((x) => (
                                        <option key={x + 1}>{ x + 1 }</option>
                                    ))}
                                </select>
                            </div>
                            <div className='basis-[10%]'>
                                <AiFillDelete 
                                    onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: product})}
                                    className='font-semibold text-xl text-red-500 hover:text-orange-500' />
                            </div>
                        </div>
                    ))}
                    
                </section>
                <section className='sticky bg-blue-950 text-white basis-[25%] lg:h-[90vh] h-auto'>
                    <div className='w-full pt-5 pl-4 pr-3'>
                        <h2 className='text-2xl font-semibold mb-4 text-center'>Payment Summary</h2>
                        <h3 className='text-lg font-semibold mb-3'> Number of Products: <span className='text-yellow-200'>{ cart.length }</span></h3>
                        <h3 className='text-lg font-semibold mb-3'> Total: <span className='text-yellow-200'>${ total }</span> </h3>
                    </div>
                    
                </section>
            </div>
        </div>
    </section>
  )
}

export default CartContent