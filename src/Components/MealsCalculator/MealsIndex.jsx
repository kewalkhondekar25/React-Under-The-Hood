import React from 'react'
import MealApp from './MealApp'
import { AppProvider } from './Context'

const MealsIndex = () => {
  return (
    <div>
      this is meal index
      <AppProvider>
        <MealApp/>
      </AppProvider>
    </div>
  )
}

export default MealsIndex
