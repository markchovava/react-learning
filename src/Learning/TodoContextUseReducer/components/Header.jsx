import React, { useContext } from 'react'
import { TodoContext } from '../TodoContextProvider'


function Header() {
  const { _state } = useContext(TodoContext)
  return (
    <section>
            <h1 className='text-[3rem] font-semibold mb-4'>
              (Context + useReducer) TODO List <small>
              {_state.length}</small>
            </h1>
        </section>
  )
}

export default Header