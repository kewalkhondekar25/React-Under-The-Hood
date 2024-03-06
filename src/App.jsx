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
import HandleForm from './Components/TwoWayBinding/HandleForm'
import DarkMode from './Components/DarkModeLightMode/DarkMode'
import Prop1 from './Components/PropDrilling/Prop1'
import FormsValidation from './Components/Validation/FormsValidation'
import Formik from './Components/Validation/Formik'
import FormikValidation from './Components/Validation/FormikValidation'
import FormikYupValidation from './Components/Validation/FormikYupValidation'
import ComponentsLifeCycle from './Components/Hooks/ComponentsLifeCycle'
import UseContext from './Components/Hooks/UseContext'
import UseReducer from './Components/Hooks/useReducer'
import LikeDisLike from './Components/Hooks/LikeDisLike'
import JqueryAjax from './Components/API_Request/JqueryAjax'
import AxiosDemo from './Components/API_Request/AxiosDemo'
import ShoppingIndex from './Components/Routing/ShoppingRouting/ShoppingIndex'
import Accordion from './Components/Accordion/Accordion'
import Map from './Components/ArrayMethods/Map'
import Filter  from './Components/ArrayMethods/Filter'

function App() {

  return (
    <>
      {/* <DataBindingComponents/>
      <CollectionBinding/>
      <TableBinding/>
      <NestedDinding/> */}
      {/* <NasaApi/> */}
      {/* <FakeStoreApi/> */}
      {/* <EventBinding/> */}
      {/* <HandleForm/> */}
      {/* <DarkMode/> */}
      {/* <Prop1/> */}
      {/* <FormsValidation/> */}
      {/* <Formik/> */}
      {/* <FormikValidation/> */}
      {/* <FormikYupValidation/> */}
      {/* <ComponentsLifeCycle/> */}
      {/* <UseContext/> */}
      {/* <UseReducer/> */}
      {/* <LikeDisLike/> */}
      {/* <JqueryAjax/> */}
      {/* <AxiosDemo/> */}
      {/* <ShoppingIndex/> */}
      {/* <Accordion/> */}
      {/* <Map/> */}
      <Filter/>
    </>
  )
}

export default App
