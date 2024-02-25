import React, { useReducer } from 'react'

//configure initial state
const initialState = {
    count: 0
}

//configure reducer
const Reducer = (state, action) => {
    switch (action.type) {
        case 'LIKE':
            return { count: state.count++ }
        case 'DISLIKE':
            return { count: state.count-- }
    }
}


const UseReducer = () => {

    //configure useReducer
    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        <div className='bg-dark text-white vh-100'>
            <h3>UseReducer</h3>
            <button className='btn btn-success' onClick={() => {dispatch({type : "LIKE"})}}>Like</button>
            <button className='btn btn-danger'onClick={() => {dispatch({type : "DISLIKE"})}}>DisLike</button>
            <h1>Counter: {state.count}</h1>
        </div>
    )
}

export default UseReducer