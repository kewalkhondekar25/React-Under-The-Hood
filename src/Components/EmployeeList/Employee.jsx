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
    if(action.type === 'REMOVE')
    {
        let newEmployee = state.employee.filter(item => item.id !== action.payload.id);
        return {...state, employee: newEmployee}
    }
    return state
}

const Employee = () => {

    const [state, dispatch] = useReducer(Reducer, initialState)

    const handleRemove = (id) => {
        dispatch({type: 'REMOVE', payload: {id}})
        }

    const handleClearAll = () => {
        dispatch({type: 'CLEAR_ALL'})
    }

    const handleRest = () => {
        dispatch({type: 'RESET'})
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
