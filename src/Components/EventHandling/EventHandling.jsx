import React from 'react'

export const EventHandling = () => {

    const add = (a, b) => {
        alert(a + b);
    }
    const handleInput = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className='bg-dark text-white vh-100'>
            <input type="text" className='form-control w-25' onChange={handleInput}  />
            <button
                className='btn btn-danger'
                onClick={() => add(2, 2)}
            >Click</button>
        </div>
    )
}
