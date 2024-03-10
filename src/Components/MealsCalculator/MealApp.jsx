import React from 'react'
import Meals from './Components/Meals'
import Cart from './Components/Cart'

const MealApp = () => {
  return (
    <div className='row'>
        <div className='col-6'>
            <Meals/>
        </div>
        <div className='col-6'>
            <Cart/>
        </div>
    </div>
  )
}

export default MealApp
