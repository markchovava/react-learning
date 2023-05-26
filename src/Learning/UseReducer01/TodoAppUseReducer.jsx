import React, { useReducer, useState, useRef } from 'react'


const initialState = []

const ACTION = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    RESET_LIST: 'RESET_LIST'
}

const init = (initialState) => {
    const result = [...initialState, {id: 1, name: 'Reading'}]
    return result
}


const reducer = (state, action) => {
    switch(action.type){
        case ACTION.ADD_TASK:
            return [ 
                { id: state.length + 1, name: action.payload } ,
                ...state
            ]
        case ACTION.REMOVE_TASK:
            return state.filter(item => item.id !== action.payload)
        case ACTION.RESET_LIST:
            return action.payload
        default:
            return state
    }
}

function TodoAppUseReducer() {
    const [_state, dispatch] = useReducer(reducer, initialState, init)
    const [_input, _setInput] = useState('')
    const _inputValue = useRef(null)

    const addTask = () => {
        if( _input !== '' && _inputValue.current.value !== '' ){
            dispatch({type: 'ADD_TASK', payload: _input})
            _inputValue.current.value = ''
            _setInput('')
        }
    }

  return (
    <div className={`bg-purple-950 w-full h-[80vh]  flex flex-col justify-center items-center text-white`}>
        <section>
            <h1 className='text-[3rem] font-semibold mb-4'>TODO List <small>{_state.length}</small></h1>
        </section>
        <section className='mb-3'>
            <button className=' bg-red-700 hover:bg-red-800 px-3 pb-2 pt-1'
                onClick={( () => dispatch({type: ACTION.RESET_LIST, payload: initialState}) )}>
                Reset
            </button>
        </section>
        <section className='flex gap-2 mb-4 w-[30rem]'>
            <input
                ref={_inputValue} 
                onChange={(e) => _setInput(e.target.value) }
                className='outline-none border-none hover:border-none p-2 text-purple-950 w-[70%]' />
            <button className=' bg-red-700 hover:bg-red-800 px-3 pb-2 pt-1 w-[25%]'
                onClick={addTask}>
                Add Task
            </button>
        </section>
        
        <section className='w-[25rem]'>
            <ul>
                {_state.map((item) => 
                    (
                        <li key={item.id} className='w-[100%] mb-2 px-3 py-2 bg-slate-900 flex items-center justify-between'>
                        <span className='font-semibold text-lg'>{item.name}</span>
                            <button 
                                className='text-sm text-yellow-100 hover:text-yellow-200 hover:bg-slate-700 bg-slate-800 px-2 pb-2 pt-1'
                                onClick={( () => dispatch({type: 'REMOVE_TASK', payload: item.id}) )}>
                                    Remove
                                </button>
                        </li>)
                    )
                }
            </ul>
        </section>
    </div>
  )
}

export default TodoAppUseReducer