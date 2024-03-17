import React, { useState } from 'react'

export const UseState = () => {

    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [counter, setCounter] = useState({
        num: 69,
        name: 'sixty-nine'
    });

    const handleCount = () => {
        setCount(count + 1);
        // console.log(count);
    }
    const handleVisible = () => {
        setVisible(!visible);
        // console.log(visible);
    }
    const handleCounter = () => {
        setCounter((prev) => {
            return {...prev, num: prev.num + 1}
        });
        console.log(counter);
    }

    return (
        <div className='bg-dark text-white vh-100'>
            <h4>asynchronous</h4>
            <p>{count}</p>
            <p>{visible ? "visible" : "invisible"}</p>
            <button
                className='btn btn-primary'
                onClick={() => {handleCount(), handleVisible()}}>Click
            </button>
            <hr />
            {/* <p>{counter}</p> */}
            <h5>synchronous</h5>
            <button className='btn btn-warning' onClick={handleCounter}>Click</button>
        </div>
    )
}
