import React from 'react'
import WithLoader from './HocCompoment'
import User from './User'

const HocIndex = () => {
    const age = 69;
    const UserWithHoc = WithLoader(User);
  return (
    <div>
        <UserWithHoc/>
    </div>
  )
}

export default HocIndex