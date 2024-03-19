import React from 'react'

const User = ({age}) => {
    const user = {
        name: 'john',
        email: 'john@example.com'
    }
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{age}</p>
    </div>
  )
}

export default User