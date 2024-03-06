import React from 'react'

export const Forms = () => {

    const handleNameChange = (e) => {
        console.log(e.target.value);
    }
  return (
    <div>
        <input type="text" placeholder='your name' onChange={handleNameChange} />
        <input type="number" placeholder='your age' onChange={handleNameChange} />
    </div>
  )
}
