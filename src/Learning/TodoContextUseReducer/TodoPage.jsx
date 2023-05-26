import React, { useContext} from 'react'
import { initialState, ACTION, init, reducer } from './TodoReducer'
import { TodoContext } from './TodoContextProvider'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


function TodoPage() {
    const {_state, dispatch, _input, _setInput, _inputValue, addTask} = useContext(TodoContext)
    /* const [_state, dispatch] = useReducer(reducer, initialState, init)
    const [_input, _setInput] = useState('')
    const _inputValue = useRef(null)

    const addTask = () => {
        if( _input !== '' && _inputValue.current.value !== '' ){
            dispatch({type: 'ADD_TASK', payload: _input})
            _inputValue.current.value = ''
            _setInput('')
        }
    } */

  return (
    <div className={`bg-gray-950 w-full h-[80vh]  flex flex-col justify-center items-center text-white`}>
        <Header />
        <TodoForm />
        <TodoList />
        
    </div>
  )
}

export default TodoPage