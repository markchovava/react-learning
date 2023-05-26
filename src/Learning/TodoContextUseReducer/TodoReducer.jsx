export const initialState = []

export const ACTION = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    RESET_LIST: 'RESET_LIST'
}

export const init = (initialState) => {
    const result = [...initialState, {id: 1, name: 'Reading'}]
    return result
}


export const reducer = (state, action) => {
    switch(action.type){
        case ACTION.ADD_TASK:
            return [ 
                ...state, 
                { id: state.length + 1, name: action.payload } 
            ]
        case ACTION.REMOVE_TASK:
            return state.filter(item => item.id !== action.payload)
        case ACTION.RESET_LIST:
            return action.payload
        default:
            return state
    }
}