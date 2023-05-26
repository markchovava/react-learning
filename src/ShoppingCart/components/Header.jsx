import { useState } from 'react'
import { BsFillCartCheckFill, BsFillCaretDownFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContextState } from '../Contexts/CartContextProvider'
import { AiFillDelete } from 'react-icons/ai'

function Header() {
    const {state: {cart}, dispatch, productDispatch } = CartContextState()
    const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='relative w-full bg-blue-950 h-auto text-white'>
        <div className='container mx-auto max-w-screen-xl lx:px-0 px-4'>
            <div className='flex items-center justify-between flex-wrap py-4'>
                <section className='basis-[15%] flex justify-start items-center'>
                    <Link to="/" className='py-2 text-lg font-semibold'>
                        Shopping Cart
                    </Link>
                </section>
                <section className='basis-[50%] flex justify-center items-center'>
                    <form className=' text-lg font-semibold w-full'>
                        <input type='text' placeholder="Search products" 
                            onChange={(e) => {
                                productDispatch({ type: 'FILTER_BY_SEARCH', payload: e.target.value })
                            }}
                            className='p-2 text-black font-normal border-none outline-none w-full rounded-lg' />
                    </form>
                </section>
                <section className='basis-[10%] flex justify-between items-center'>
                    <div className='relative w-full'>
                        <div 
                            className='bg-blue-900 hover:bg-blue-700 cursor-pointer p-3 flex justify-between items-center w-full rounded-lg'
                            onClick={() => setIsOpen(!isOpen) }>
                            <div><BsFillCartCheckFill className='text-xl' /></div>
                            <div>{ cart.length }</div>
                            <div><BsFillCaretDownFill className={`text-xl ${isOpen == true ? 'text-green-200' : ''} `} /></div>
                        </div>
                        <div className={`z-10 ${isOpen == true ? '' : 'hidden'} cursor-pointer absolute top-[110%] w-[200%] -left-[100%] bg-blue-900 py-4 px-2 rounded-lg`}>
                            { cart.length > 0 ? (
                                <>
                                    {cart.map((product) => (
                                        <div className='mb-2 text-sm flex justify-between'>
                                            <div className='flex flex-col'>
                                                <span className='font-semibold'>{product.name}</span>
                                                <span className='font-normal text-md'>${product.price.split(".")[0]}</span>
                                            </div>
                                            <div className='flex justify-end gap-2 items-center'>
                                                <AiFillDelete 
                                                    onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: product})}
                                                    className='font-semibold text-lg hover:text-yellow-300' />
                                            </div>
                                        </div>    
                                    ))}
                                    <Link to='/cart'>
                                        <button
                                            className='text-center mt-2 bg-orange-400 hover:bg-orange-500 text-black w-full py-2'>
                                            Goto Cart Page
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <p className='text-center'>No Items in the Cart</p>
                            )}
                            
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    </section>
  )
}

export default Header