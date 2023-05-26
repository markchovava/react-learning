import React, { useState, useReducer, useRef, createContext } from 'react';
import { initialState, ACTION, init, reducer } from './TodoReducer'


export const TodoContext = createContext()


const TodoContextProvider = ({ children }) => {
    const [_state, dispatch] = useReducer(reducer, initialState, init)
    const [_input, _setInput] = useState('')
    const _inputValue = useRef(null)

    const addTask = () => {
        if( _input !== '' && _inputValue.current.value !== '' ){
            dispatch({type: ACTION.ADD_TASK, payload: _input})
            _inputValue.current.value = ''
            _setInput('')
        }
    }
    

    return (
        <div>
            <TodoContext.Provider value={{
                _state, 
                dispatch,
                _input,
                _setInput,
                _inputValue,
                addTask
            }}>
                { children }
            </TodoContext.Provider>
        </div>
    )
}

export default TodoContextProvider