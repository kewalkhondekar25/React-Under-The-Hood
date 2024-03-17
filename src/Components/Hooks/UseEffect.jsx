import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log('mounted');
    }, [count])
  return (
    <div className='bg-dark text-white vh-100'>
        <p>{count}</p>
        <button className='btn btn-warning' onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}

export default UseEffect