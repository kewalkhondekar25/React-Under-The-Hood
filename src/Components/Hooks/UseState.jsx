import React, { useState } from 'react'

export const UseState = () => {

    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    return (
        <div className='bg-dark text-white vh-100'>
            <p>
                {count}
            </p>
            <p>
                {visible ? "visible" : "invisible"}
            </p>
            <button
                className='btn btn-primary'
                onClick={() => {setCount(count + 1), setVisible(!visible)}}>Click</button>
        </div>
    )
}
