import React, { useContext }  from 'react'
import { TodoContext } from '../TodoContextProvider'
import TodoItem from './TodoItem'


function TodoList() {
    const { _state } = useContext(TodoContext)
  return (
    <>
        <section className='w-[25rem]'>
            <ul>
                { _state.map((item) => (
                        <TodoItem id={ item.id } name={ item.name } />
                    ))
                }
            </ul>
        </section>
    </>
  )
}

export default TodoList