import React from 'react'
import Child1 from './Pages/Child1'
import AppProvider from './context'
import Child2 from './Pages/Child2'

const GlobalIndex = () => {
  return (
    <AppProvider>
        <h3>GlobalIndex</h3>
        <Child1/>
        <Child2/>
    </AppProvider>
  )
}

export default GlobalIndex