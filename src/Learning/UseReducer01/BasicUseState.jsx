import React, { useState } from 'react'

function BasicUseState() {
    const [color, setColor] = useState(false)
    const [input, setInput] = useState('')
    const [num, setNum] = useState(0)


  return (
    <div className={`${ color ? 'bg-purple-950' : 'bg-blue-950' } w-full h-[80vh]  flex flex-col justify-center items-center text-white`}>
        <section className='mb-4'>
            <button
                onClick={(e) => setColor(true)} 
                className='flex justify-center items-center border px-4 pb-2 text-2xl hover:bg-black'>
                Set Color
            </button>
        </section>
        <section className='mb-4'>
            <input onChange={(e) => setInput(e.target.value)} className='border-none p-2 text-blue-950 w-[20rem]' />
        </section>
        <section className='mb-4 text-2xl '>{input ? input : '""'}</section>
        <section className='flex gap-1 mb-4'>
            <button
                onClick={(e) => setNum(prev => prev - 1)} 
                className='flex justify-center items-center border px-4 pb-2 text-2xl hover:bg-black'>
                -
            </button>
            <button
                onClick={(e) => setNum(prev => prev + 1)} 
                className='flex justify-center items-center border px-4 pb-2 text-2xl hover:bg-black'>
                +
            </button>
        </section>
        <section>
            <p className='text-2xl font-semibold'>{num}</p>
        </section>
    </div>
  )
}

export default BasicUseState