import React, {useState, useReducer} from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        case 'NEW_USER_INPUT':
            return { ...state, userInput: action.payload }
        case 'NEW_USER_INPUT':
            return { ...state, userInput: action.payload }
        case 'NEW_USER_INPUT':
            return { ...state, color: true }
        default:
            return state
    }
}

function BasicUseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0, color: false, userInput: ''})
    const [color, setColor] = useState(false)
    
    const [num, setNum] = useState(0)


  return (
    <div className={`${ color ? 'bg-pink-950' : 'bg-green-950' } w-full h-[80vh]  flex flex-col justify-center items-center text-white`}>
        <section className='mb-4'>
            <button
                onClick={(e) => setColor(true)} 
                className='flex justify-center items-center border px-4 pb-2 text-2xl hover:bg-black'>
                Set Color
            </button>
        </section>
        <section className='mb-4'>
            <input
                onChange={( (e) => dispatch({type: 'NEW_USER_INPUT', payload: e.target.value}) )} 
                className='border-none p-2 text-blue-950 w-[20rem]' />
        </section>
        <section className='mb-4 text-2xl '>{state.userInput ? state.userInput : '""'}</section>
        <section className='flex gap-1 mb-4'>
            <button
                onClick={ (() => dispatch({type: 'DECREMENT'}) )} 
                className='flex justify-center items-center border px-4 pb-2 text-2xl hover:bg-black'>
                -
            </button>
            <button
                onClick={ (() => dispatch({type: 'INCREMENT'}) )} 
                className='flex justify-center items-center border px-4 pb-2 text-2xl hover:bg-black'>
                +
            </button>
        </section>
        <section>
            <p className='text-2xl font-semibold'>{state.count}</p>
        </section>
    </div>
  )
}

export default BasicUseReducer