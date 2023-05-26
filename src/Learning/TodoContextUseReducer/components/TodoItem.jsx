import React, { useContext } from 'react'
import { ACTION } from '../TodoReducer'
import { TodoContext } from '../TodoContextProvider'

function TodoItem({id, name}) {
    const { dispatch } = useContext(TodoContext)
  return (
    <li key={id} className='w-[100%] mb-2 px-3 py-2 bg-slate-900 flex items-center justify-between'>
        {id}. <span className='font-semibold text-lg'>{name}</span>
        <button 
            className='text-sm text-yellow-100 hover:text-yellow-200 hover:bg-slate-700 bg-slate-800 px-2 pb-2 pt-1'
            onClick={( () => dispatch({type: ACTION.REMOVE_TASK, payload: id}) )}>
            Remove
        </button>
    </li>
  )
}

export default TodoItem