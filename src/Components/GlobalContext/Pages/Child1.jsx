import React from 'react'
import { useGlobalContext } from '../context'

const Child1 = () => {
    const {name} = useGlobalContext();
  return (
    <div>
      Child1 : {name}
    </div>
  )
}

export default Child1
