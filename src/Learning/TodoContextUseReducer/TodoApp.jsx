import React from 'react'
import TodoPage from "./TodoPage"
import TodoContextProvider from './TodoContextProvider'


function TodoApp() {
    

  return (
   <>
    <TodoContextProvider>
        <TodoPage />
    </TodoContextProvider>
   </>
  )
}

export default TodoApp