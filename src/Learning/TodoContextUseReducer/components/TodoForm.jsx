import React, { useContext }  from 'react'
import { ACTION, initialState } from '../TodoReducer'
import { TodoContext } from '../TodoContextProvider'


function TodoForm() {
    const {dispatch, _setInput, _inputValue, addTask} = useContext(TodoContext)

  return (
    <>
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
    </>
  )
}

export default TodoForm