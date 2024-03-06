import React from 'react'

const Child = ({name, handleClick}) => {
  return (
    <div>
        <h3>{name}</h3>
        <button 
        className='btn btn-warning'
        onClick={() => handleClick("karna")}>Change Name</button>
    </div>
  )
}

export default Child