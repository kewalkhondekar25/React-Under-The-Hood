import React from 'react'
import { useGlobalContext } from '../context'

const Child2 = () => {
    const {name} = useGlobalContext();
  return (
    <div>Child2 : {name}</div>
  )
}

export default Child2