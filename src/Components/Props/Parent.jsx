import React, { useState } from 'react'
import Child from './Child'

export const Parent = () => {

    const [name, setName] = useState("arjun")
    
  return (
    <div className='bg-dark text-white vh-100'>
        <Child name={name}/>
        <button 
        className='btn btn-warning'
        onClick={() => setName("krishna")}>Change Name</button>
    </div>
  )
}
