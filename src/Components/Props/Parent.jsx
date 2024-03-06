import React, { useState } from 'react'
import Child from './Child'

export const Parent = () => {

    const [name, setName] = useState("arjun");

    const handleClick = (value) => {
      setName(value)
    }
    
  return (
    <div className='bg-dark text-white vh-100'>
        <Child name={name} handleClick={handleClick}/>
    </div>
  )
}
