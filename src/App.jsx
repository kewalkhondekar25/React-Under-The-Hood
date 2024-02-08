import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataBindingComponents from './Components/DataBinding/DataBindingComponents'
import CollectionBinding from './Components/DataBinding/CollectionBinding'
import TableBinding from './Components/DataBinding/TableBinding'

function App() {

  return (
    <>
      <DataBindingComponents/>
      <CollectionBinding/>
      <TableBinding/>
    </>
  )
}

export default App
