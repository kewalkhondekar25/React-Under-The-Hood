import React, { useCallback, useState } from 'react'

const UseCallBack = () => {
    
    const [count, setCount] = useState(1);
    const handleChange = () => {
        setCount(count + 1)
    }
    const handleTask = useCallback(() => {
        return count * count
    }, [count])
  return (
    <div className='bg-dark text-white vh-100'>
        <p>{count}</p>
        <button className='btn btn-primary' onClick={handleChange}>Parent</button>
        <ChildComponent handleTask={handleTask}/>
    </div>
  )
}

const ChildComponent = React.memo(({handleTask}) => {
    console.log('computing...');
    return(
        <div>
            <p>{handleTask()}</p>
        </div>
    )
})

export default UseCallBack
