import React from 'react'
import Sidebar from './Sidebar'
import ListProduct from './ListProduct'

function MainContent() {
  
  return (
    <section className='w-full bg-slate-100 pt-4 h-auto'>
        <div className='container mx-auto max-w-screen-xl lx:px-0 px-4'>
            <div className='flex basis[100%] justify-start gap-4 w-full h-auto'>
                <Sidebar />
                <ListProduct />
            </div>
            

        </div>
    </section>
  )
}

export default MainContent