import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [count, setCount] = useState(10);
    const [count2, setCount2] = useState(100);

    const heavyTask = () => {
        console.log('heavy task...');
        return count * count
    }
    const memoTask = useMemo(heavyTask, [count]);
  return (
    <div className='bg-dark text-white vh-100'>
      <h3>count: {count}</h3>
      <p>{memoTask}</p>
      <button className='btn btn-success' onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <h4>count 2: {count2}</h4>
      <button className='btn btn-warning' onClick={() => setCount2(count2 - 1)}>Decrement</button>      
    </div>
  )
}

export default UseMemo
