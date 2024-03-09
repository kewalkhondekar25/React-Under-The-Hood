import React, { useReducer, useState } from 'react'
import { data } from './utils'

const initialState = {
    employee: data
};

const Reducer = (state, action) => {
    console.log(action);
    if(action.type === 'CLEAR_ALL')
    {
        return {...state, employee: []}
    };
    if(action.type === 'RESET')
    {
        return {...state, employee: data}
    }
    return state
}

const Employee = () => {

    const [state, dispatch] = useReducer(Reducer, initialState)

    const handleRemove = (id) => {
        dispatch({type: 'REMOVE'})
        // setEmployee(employee.filter(item => item.id !== id));
    }

    const handleClearAll = () => {
        dispatch({type: 'CLEAR_ALL'})
        // setEmployee([]);
    }

    const handleRest = () => {
        dispatch({type: 'RESET'})
        // setEmployee(data);
    }

    console.log(state);

    return (
        <div>
            {
                state.employee.map(item => {
                    return (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <button onClick={() => handleRemove(item.id)} className='btn btn-danger'>Remove</button>
                        </div>
                    )
                })
            }
            {
                state.employee.length < 1 ?
                    <button onClick={handleRest} className='btn btn-success mt-5 ms-3'>Reset</button>
                    :
                    <button onClick={handleClearAll} className='btn btn-warning mt-5'>Clear All</button>
            }

        </div>
    )
}

export default Employee
