import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataBindingComponents from './Components/DataBinding/DataBindingComponents'
import CollectionBinding from './Components/DataBinding/CollectionBinding'
import TableBinding from './Components/DataBinding/TableBinding'
import NestedDinding from './Components/DataBinding/NestedBinding'
import NasaApi from './Components/Hooks/NasaApi'
import FakeStoreApi from './Components/Hooks/FakeStoreApi'
import EventBinding from './Components/TwoWayBinding/EventBinding'

function App() {

  return (
    <>
      {/* <DataBindingComponents/>
      <CollectionBinding/>
      <TableBinding/>
      <NestedDinding/> */}
      {/* <NasaApi/> */}
      {/* <FakeStoreApi/> */}
      <EventBinding/>
    </>
  )
}

export default App
