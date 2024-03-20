import React from 'react'
import FakeStore from './FakeStore'
import VeganMeals from './VeganMeals'

const HOCIndex2 = () => {
  return (
    <div className='d-flex'>
      <FakeStore/>
      <VeganMeals/>
    </div>
  )
}

export default HOCIndex2
